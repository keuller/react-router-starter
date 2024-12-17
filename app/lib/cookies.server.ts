import { createCookie } from "react-router";

export const userCookie = createCookie("user", { httpOnly: true, path: "/", maxAge: 300 });