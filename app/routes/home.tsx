import { Suspense } from "react";
import type { Route } from "./+types/home";
import { Welcome } from "~/welcome/welcome";
import { Await, redirect } from "react-router";
import { isAuthenticated } from "~/lib/cookies.server";

export async function loader({ request }: Route.LoaderArgs): Promise<{ time: unknown } | Response> {
  return isAuthenticated(request).then((flag) => {
    if (!flag) return redirect("/login", { status: 302 });
    const timePromise = new Promise((resolve) => setTimeout(() => resolve(new Date().toISOString()), 1000));
    return { time: timePromise }
  });
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <>
      <Welcome />
      <Suspense fallback={<div className="text-center text-sm animate-pulse">Loading...</div>}>
        <Await resolve={loaderData?.time}>
          {(time) => <p className="text-center text-base text-slate-500">{time}</p>}
        </Await>
      </Suspense>
    </>
  );
}
