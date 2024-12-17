import { Suspense } from "react";
import type { Route } from "./+types/home";
import { Welcome } from "~/welcome/welcome";
import { Await, redirect } from "react-router";
import { userCookie } from "~/lib/cookies.server";

export async function loader({ request }: Route.LoaderArgs) {
  const cookieHeader = request.headers.get("Cookie");
  const user: string | null = await userCookie.parse(cookieHeader);

  if (!user) return redirect("/login", { status: 302 });

  const timePromise = new Promise((resolve) => setTimeout(() => resolve(new Date().toISOString()), 1000));
  return {
    time: timePromise,
  }
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <>
      <Welcome />
      <Suspense fallback={<div className="text-center text-sm animate-pulse">Loading...</div>}>
        <Await resolve={loaderData?.time}>
          {(time) => <p className="text-center text-sm text-slate-500">{time}</p>}
        </Await>
      </Suspense>
    </>
  );
}
