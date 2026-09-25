export default function ParagraphTag() {
    return (
        <div id="wd-p-tag">
            <h4>Paragraph Tag</h4>
            <p id="wd-p-1">
                This is the first paragraph. The paragraph tag is used to format
                vertical gaps between long pieces of text like this one.
            </p>
            <p id="wd-p-2">
                This is the second paragraph. Even though there is a deliberate white
                gap between the paragraph above and this paragraph, by default browsers
                render them as one contiguous piece of text as shown here on the right.
            </p>
            <p id="wd-p-3">
                This is the third paragraph. Wrap each paragraph with the paragraph tag
                to tell browsers to render the gaps.
            </p>
            <p id="wd-ai-p">
                The p tag is a block-level element, so each paragraph starts on its
                own line. Browsers also add a default top and bottom margin to it,
                which creates the vertical gap between paragraphs.
            </p>
            <p id="wd-p-your-1">
                I am an Align student currently learning web development.
            </p>

            <p id="wd-p-your-2">
                I hope to become more comfortable building websites and using HTML throughout this course.
            </p>

        </div>
    );
}