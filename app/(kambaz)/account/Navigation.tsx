
import Link from "next/link";

export default function AccountNavigation() {
    return (
        <div id="wd-account-navigation" className="flex flex-col text-lg">
            <Link
                href="/account/signin"
                className="block border-0 p-2 text-red-600 no-underline"
            >
                Signin
            </Link>

            <Link
                href="/account/signup"
                className="block border-0 p-2 text-red-600 no-underline"
            >
                Signup
            </Link>

            <Link
                href="/account/profile"
                className="block border-l-[3px] border-black bg-white p-2 font-semibold text-black no-underline"
            >
                Profile
            </Link>
        </div>
    );
}
