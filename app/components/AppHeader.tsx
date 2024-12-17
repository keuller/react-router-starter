
export default function AppHeader({ hasUser }: { hasUser: boolean }) {
    return (
        <header className="flex items-center justify-between border-b px-4 py-3">
            <h2 className="text-xl font-medium">Starter</h2>
            {!hasUser && (<nav className="flex gap-1 items-center">
                <a href="/login" className="text-sm">Login</a>
                <span>&nbsp;|&nbsp;</span>
                <a href="/register" className="text-sm">Register</a>
            </nav>)}

            {hasUser && (<nav className="flex gap-1 items-center">
                <a href="/logout" className="text-sm">Logout</a>
            </nav>)}
        </header>
    );
}