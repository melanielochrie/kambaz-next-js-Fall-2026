export default function AnchorTag() {
    return (
        <>
            <h4>Anchor tag</h4>
            Please{" "}
            <a href="https://www.lipsum.com" id="wd-lipsum">
                click here
            </a>{" "}
            to get dummy text
            <br />
            <a href="https://github.com/jannunzi" id="wd-github">
                GitHub
            </a>
            <br />
            {/* Absolute — another site */}
            <a href="https://www.lipsum.com">lipsum.com</a>
            <br />
            {/* Relative — same site */}
            <a href="/labs">Back to Labs</a>
            <br />
            {/* Fragment — same page, scroll to id */}
            <a href="#wd-anchor-bottom">Jump to bottom</a>
            <br />
            {/* New tab + safer external link */}
            <a
                href="https://github.com/jannunzi"
                target="_blank"
                rel="noreferrer"
            >
                GitHub (new tab)
            </a>
            <br />

            <a 
                href="https://www.ravelry.com/account/login" id="wd-your-link">
                Raverly (A website for crochet ideas)
            </a>

            <br />

            <a
                href="https://github.com/melanielochrie"
                id="wd-your-github"
                target="_blank"
                rel="noreferrer"
            >
                My GitHub
            </a>

            <br />

            <a
                href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table"
                id="wd-ai-link"
                target="_blank"
                rel="noreferrer"
            >
                MDN: table element
            </a>
        </>
    );
}