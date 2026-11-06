import Link from "next/link";

export default function Labs() {
  return (
    <div id="wd-labs">
      <h1>Labs</h1>
      <h2>Melanie Lochrie</h2>

      <ul>
        <li>
          <Link href="/account/signin" id="wd-kambaz-link">Kambaz</Link>
        </li>
        <li>
          <Link href="/labs/lab1">Lab 1: HTML Examples</Link>
        </li>
        <li>
          <Link href="/labs/lab2">Lab 2: CSS Basics</Link>
        </li>
        <li>
          <Link href="/labs/lab3">Lab 3: JavaScript Fundamentals</Link>
        </li>
        <a
          id="wd-github"
          href="https://github.com/melanielochrie/kambaz-next-js-Fall-2026"
        >
          GitHub Repository
        </a>
      </ul>
    </div>
  );
}