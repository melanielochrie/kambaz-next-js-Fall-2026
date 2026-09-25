import Link from "next/link";

export default function Labs() {
    return (
        <div id="wd-labs">
            <h1>Labs</h1>

            <h2>Melanie Lochrie</h2>

            <ul>
                <li>
                    <Link href="/labs/lab1">Lab 1</Link>
                </li>
            </ul>

            <a
                id="wd-github"
                href="https://github.com/melanielochrie/kambaz-next-js-Fall-2026"
            >
                GitHub Repository
            </a>
        </div>
    );
}