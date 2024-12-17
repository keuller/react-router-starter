import type { Route } from "./+types/login";
import { userCookie } from "~/lib/cookies.server";
import { Form, redirect, useNavigation } from "react-router";

export function meta() {
    return [
        { title: "Login" },
    ];
}

export async function action({ request }: Route.ActionArgs) {
    const data = Object.fromEntries(await request.formData());

    await new Promise((res) => setTimeout(res, 1000));

    console.log("[login]", data);
    if (data.email === "admin@test.com" && data.password === "abc123") {
        return redirect("/", {
            status: 302,
            headers: {
                "Set-Cookie": await userCookie.serialize("user-test"),
            }
        });
    }

    return {
        success: false,
        message: "Invalid credentials"
    }
}

export default function Login({ actionData }: Route.ComponentProps) {
    const navigate = useNavigation();

    return (
        <div className="flex flex-col items-center gap-3 justify-center h-full">
            {actionData && !actionData.success && (
                <div className="p-2 border-red-500 bg-red-100 text-red-500 rounded-md min-w-96">
                    <span>{actionData.message}</span>
                </div>
            )}

            <Form id="loginForm" method="post" action="/login"
                className="flex flex-col gap-3 border rounded-md p-4 min-w-96 shadow">
                <h3 className="text-xl font-bold leading-6">Welcome!</h3>

                <div className="space-y-1">
                    <label htmlFor="email" className="block w-fit pl-0.5 text-sm">
                        E-mail
                    </label>
                    <input id="email" type="email" name="email" maxLength={120} required
                        className="w-full rounded-xl border border-slate-300 bg-slate-100 px-2 py-2 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 disabled:cursor-not-allowed disabled:opacity-75 dark:border-slate-700 dark:bg-slate-800/50 dark:focus-visible:outline-blue-600"
                    />
                </div>

                <div className="space-y-1">
                    <label htmlFor="password" className="block w-fit pl-0.5 text-sm">Password</label>
                    <input id="password" type="password" name="password" maxLength={40} required
                        className="w-full rounded-xl border border-slate-300 bg-slate-100 px-2 py-2 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 disabled:cursor-not-allowed disabled:opacity-75 dark:border-slate-700 dark:bg-slate-800/50 dark:focus-visible:outline-blue-600"
                    />
                </div>

                <div className="flex gap-2">
                    <button type="submit" disabled={navigate.state === "submitting"}
                        className="cursor-pointer whitespace-nowrap rounded-xl bg-blue-700 px-4 py-2 text-sm font-medium tracking-wide text-slate-100 transition hover:opacity-75 text-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 active:opacity-100 active:outline-offset-0 disabled:opacity-75 disabled:cursor-not-allowed dark:bg-blue-600 dark:text-slate-100 dark:focus-visible:outline-blue-600">
                        {navigate.state === "submitting" ? "Processing..." : "Access"}
                    </button>
                </div>
            </Form>
        </div>
    );
}