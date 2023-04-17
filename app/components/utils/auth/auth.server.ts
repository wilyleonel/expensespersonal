import { redirect, json, createCookieSessionStorage } from "@remix-run/node";
import type { AxiosError } from "axios";
import axios from "axios";

export type Role =
  | "ADMIN"
  | "USER"

type auth = {
  email: string;
  password: string;
};

export type user = {
  id: number;
  email: string;
  password: string;
  role: Role;
  profile?: null | {};
  token: string;
};
export const secret = "SECRET ";
if (!secret) throw new Error("SESSION_SECRET is not set");

export const storage = createCookieSessionStorage({
  cookie: {
    name: "tu-doctor-net-session",
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 30,
    secrets: [secret],
    secure: process.env.NODE_ENV === "production",
  },
});

export async function loginUser({ email, password }: auth) {
  const user: user = await axios
    .post("http://localhost:8000/auth/login", {
      email,
      password,
    })
    .then((_res) => {
      return _res.data;
    })
    .catch((err: AxiosError) => {
      console.log(err.response);
      return null;
    });
  if (user === null) {
    return json({ error: `Ingreso Incorrecto` }, { status: 400 });
  }
  const newLogin = JSON.stringify(user);
  switch (user.role) {
    case "ADMIN":
      return createUserSession(newLogin, "/home");
    case "USER":
      return createUserSession(newLogin, "/home");
    default:
      return json({ error: `Ingreso Incorrecto` }, { status: 400 });
  }
}

export async function createUserSession(userId: string, redirectTo: string) {
  const session = await storage.getSession();
  session.set("userId", userId);
  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session),
    },
  });
}

export async function requireUserId(
  request: Request,
  redirectTo: string = new URL(request.url).pathname
) {
  const session = await getUserSession(request);
  const userId = session.get("userId");
  console.log(userId, "<==");
  if (!userId || typeof userId !== "string") {
    const searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
    throw redirect(`/auth/login?${searchParams.toString()}`);
  }
  const newUser: user = JSON.parse(userId);
  return newUser.token;
}

export async function requireUserRole(
  request: Request,
  roll: Role[],
  redirectTo: string = new URL(request.url).pathname
) {
  const user = await getUserToken(request);
  const searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
  if (!user) {
    throw redirect(`/auth/login?${searchParams.toString()}`);
  }
  const { role } = user;
  if (!roll.includes(role)) {
    throw redirect(`/`);
  } else {
    return user;
  }
}

function getUserSession(request: Request) {
  const cookie = request.headers.get("Cookie");
  return storage.getSession(cookie);
}

async function getUserToken(request: Request) {
  const session = await getUserSession(request);
  const userId = session.get("userId");
  if (!userId) return null;
  const newUser: {
    id: number;
    token: string;
    role: Role;
  } = JSON.parse(userId);
  return newUser;
}

export async function getUser(request: Request) {
  try {
    const user = await getUserToken(request);
    if (!user) return null;
    return user.token;
  } catch {
    throw logout(request);
  }
}

export async function logout(request: Request) {
  const session = await getUserSession(request);
  console.log(session)
  return redirect("/auth/logout", {
    headers: {
      "Set-Cookie": await storage.destroySession(session),
    },
  });
}


