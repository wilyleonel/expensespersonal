import type {
  LinksFunction,
  MetaFunction,
  LoaderFunction,
} from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import styles from "./styles/app.css";
import { getUser } from "./components/utils/auth/auth.server";
import { Provider } from "react-redux";
import store from "./store";
import Notify from "./components/Share/popups/Notify";
import https from "https";
import axios from "axios";

export const loader: LoaderFunction = async ({ request }) => {
  const user = await getUser(request);
  return user ? user : null;
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Expenses Personal",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => [
  {
    rel: "stylesheet ",
    href: styles,
  },
];

axios.defaults.httpsAgent = new https.Agent({ rejectUnauthorized: false });

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Provider store={store}>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
          <Notify />
        </Provider>
      </body>
    </html>
  );
}
