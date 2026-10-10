
import Link from "next/link";

export default function Signup() {
    return (
        <div id="wd-signup-screen" className="max-w-sm">
            <h1 className="mb-4 text-2xl font-semibold">
                Sign up
            </h1>

            <div className="mb-4">
                <label
                    htmlFor="wd-signup-username"
                    className="mb-2 block font-semibold"
                >
                    Username
                </label>
                <input
                    id="wd-signup-username"
                    placeholder="username"
                    defaultValue="ada"
                    className="wd-username w-full rounded border border-neutral-300 px-3 py-2"
                />
            </div>

            <div className="mb-4">
                <label
                    htmlFor="wd-signup-password"
                    className="mb-2 block font-semibold"
                >
                    Password
                </label>
                <input
                    id="wd-signup-password"
                    placeholder="password"
                    type="password"
                    defaultValue="123"
                    className="wd-password w-full rounded border border-neutral-300 px-3 py-2"
                />
            </div>

            <div className="mb-4">
                <label
                    htmlFor="wd-signup-verify"
                    className="mb-2 block font-semibold"
                >
                    Verify Password
                </label>
                <input
                    id="wd-signup-verify"
                    placeholder="verify password"
                    type="password"
                    className="wd-password-verify w-full rounded border border-neutral-300 px-3 py-2"
                />
            </div>

            <Link
                href="/account/profile"
                id="wd-signup-btn"
                className="mb-3 block w-full rounded bg-blue-600 px-3 py-2 text-center text-white no-underline"
            >
                Sign up
            </Link>

            <Link
                href="/account/signin"
                className="text-blue-600 hover:underline"
            >
                Sign in
            </Link>
        </div>
    );
}
