
import Link from "next/link";

export default function Signin() {
    return (
        <div id="wd-signin-screen" className="max-w-sm">
            <h1 className="mb-4 text-2xl font-semibold">
                Sign in
            </h1>

            <div className="mb-4">
                <label
                    htmlFor="wd-username"
                    className="mb-2 block font-semibold"
                >
                    Username
                </label>
                <input
                    id="wd-username"
                    placeholder="username"
                    defaultValue="ada"
                    className="wd-username w-full rounded border border-neutral-300 px-3 py-2"
                />
            </div>

            <div className="mb-4">
                <label
                    htmlFor="wd-password"
                    className="mb-2 block font-semibold"
                >
                    Password
                </label>
                <input
                    id="wd-password"
                    placeholder="password"
                    type="password"
                    defaultValue="123"
                    className="wd-password w-full rounded border border-neutral-300 px-3 py-2"
                />
            </div>

            <div className="mb-4">
                <label
                    htmlFor="wd-ai-signin-note"
                    className="mb-2 block font-semibold"
                >
                    Note
                </label>
                <input
                    id="wd-ai-signin-note"
                    placeholder="sample note"
                    className="w-full rounded border border-neutral-300 px-3 py-2"
                />
            </div>

            <Link
                href="/dashboard"
                id="wd-signin-btn"
                className="mb-3 block w-full rounded bg-blue-600 px-3 py-2 text-center text-white no-underline"
            >
                Sign in
            </Link>

            <Link
                href="/account/signup"
                id="wd-signup-link"
                className="text-blue-600 hover:underline"
            >
                Sign up
            </Link>
        </div>
    );
}
