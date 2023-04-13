import type { LoaderFunction } from "@remix-run/node"
import { redirect } from "@remix-run/node"
import { requireUserRole } from "~/components/utils/auth/auth.server";

export const loader: LoaderFunction = async ({ request }) => {
    const user = await requireUserRole(request, [
        "ADMIN",
        "USER"
    ]);
    if (user.role === "ADMIN") {
        return redirect("/home")
    } else if (user.role === "USER") {
        return redirect("/home")
    } else {
        return redirect("/home")
    }
}