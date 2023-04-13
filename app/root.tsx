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
  // {
  //   rel: "icon",
  //   sizes: "16x16",
  //   href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABRCAYAAABFTSEIAAABN2lDQ1BBZG9iZSBSR0IgKDE5OTgpAAAokZWPv0rDUBSHvxtFxaFWCOLgcCdRUGzVwYxJW4ogWKtDkq1JQ5ViEm6uf/oQjm4dXNx9AidHwUHxCXwDxamDQ4QMBYvf9J3fORzOAaNi152GUYbzWKt205Gu58vZF2aYAoBOmKV2q3UAECdxxBjf7wiA10277jTG+38yH6ZKAyNguxtlIYgK0L/SqQYxBMygn2oQD4CpTto1EE9AqZf7G1AKcv8ASsr1fBBfgNlzPR+MOcAMcl8BTB1da4Bakg7UWe9Uy6plWdLuJkEkjweZjs4zuR+HiUoT1dFRF8jvA2AxH2w3HblWtay99X/+PRHX82Vun0cIQCw9F1lBeKEuf1UYO5PrYsdwGQ7vYXpUZLs3cLcBC7dFtlqF8hY8Dn8AwMZP/fNTP8gAAAAJcEhZcwAALiMAAC4jAXilP3YAAAcmaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA5LjAtYzAwMCA3OS4xNzFjMjdmLCAyMDIyLzA4LzE2LTE4OjAyOjQzICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjQuMCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTA4LTExVDE0OjAwOjAzLTA1OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMS0wN1QxNjoyNTowMy0wNTowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMi0xMS0wN1QxNjoyNTowMy0wNTowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJBZG9iZSBSR0IgKDE5OTgpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmNiN2M1ZmY3LTIzNTItNTc0Mi04Zjk5LWQ1OGNlYmM5NzYyZiIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmJkOWZiZmU5LTQ0ZGQtMTM0MS1hMWE4LTgzMDQxOTEyMThkZCIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmU1ZmFlNTc0LWFhZGMtOTI0Yy05NmMyLTRiN2U2ZWMxNjIzMCI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZTVmYWU1NzQtYWFkYy05MjRjLTk2YzItNGI3ZTZlYzE2MjMwIiBzdEV2dDp3aGVuPSIyMDIyLTA4LTExVDE0OjAwOjAzLTA1OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjQuMCAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNvbnZlcnRlZCIgc3RFdnQ6cGFyYW1ldGVycz0iZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL3BuZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZTY1YmRjMGItYmVmYi05NzQ1LThhZmItY2FiMjY1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",
  // },
  // {
  //   rel: "preconnect",
  //   href: "https://fonts.googleapis.com",
  // },
  // {
  //   rel: "preconnect",
  //   href: "https://fonts.gstatic.com",
  //   crossOrigin: "anonymous",
  // },
  // {
  //   rel: "stylesheet preload prefetch",
  //   as: "style",
  //   href: "https://fonts.googleapis.com/css2?family=Signika+Negative&display=swap",
  // },
  // {
  //   rel: "stylesheet preload prefetch",
  //   as: "style",
  //   href: "https://fonts.googleapis.com/css2?family=Overpass&display=swap",
  // },
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
