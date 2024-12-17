import { Link } from "react-router";

export default function AppHeader({ hasUser }: { hasUser: boolean }) {
    return (
        <header className="flex items-center justify-between border-b px-4 py-3">
            <h2 className="text-xl font-medium">Starter</h2>
            {!hasUser && (<nav className="flex gap-1 items-center">
                <Link to="/login" className="text-sm" viewTransition>Login</Link>
                <span>&nbsp;|&nbsp;</span>
                <Link to="/register" className="text-sm" viewTransition>Register</Link>
            </nav>)}

            {hasUser && (<nav className="flex gap-1 items-center">
                <a href="/logout" className="text-sm">Logout</a>
            </nav>)}
        </header>
    );
}