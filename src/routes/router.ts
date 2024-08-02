import { notFound } from "../pages/not_found";
import { routes } from "./routes";

export const router = () => {
  const path = window.location.pathname;
  const route = routes.find((r) => r.path === path);

  const app = document.getElementById("app");

  if (route) {
    app?.appendChild(route.component);
  } else {
    app?.append(notFound);
  }
};
