import "./index.css";

export default function Lab2() {
  return (
    <div id="wd-lab2">
      <h2>Lab 2 - Cascading Style Sheets</h2>

      <h3>Styling with the STYLE attribute</h3>

      <p>
        Style attribute allows configuring look and feel right on the
        element. Although it&apos;s very convenient it is considered bad
        practice and you should avoid using the style attribute
      </p>

      <p id="wd-ai-style-attr" style={{ backgroundColor: "purple", color: "white" }}>
        This is a sample paragraph with a purple background and white text,
        styled using the style attribute.
      </p>

      <p style={{ backgroundColor: "green", color: "yellow" }}>
        This paragraph has a green background and yellow text.
      </p>

      <div id="wd-css-id-selectors">
        <h3>ID selectors</h3>

        <p id="wd-id-selector-1">
          Instead of changing the look and feel of all the
          elements of the same name, we can refer to a
          specific element by its ID.
        </p>

        <p id="wd-id-selector-2">
          Here's another paragraph using a different ID
          and a different look and feel.
        </p>

        <p id="wd-ai-id-selector">
          This is a sample paragraph styled with its own ID
          selector, using a teal background and white text.
        </p>

        <p id="wd-id-selector-3">
          This is my third paragraph using ID selectors.
          I chose purple and turquoise for the Arizona Diamondbacks!
        </p>
      </div>

      <div id="wd-css-class-selectors">
        <h3>Class selectors</h3>

        <p className="wd-class-selector">
          Instead of using IDs to refer to elements,
          we can use the class attribute.
        </p>

        <h4 className="wd-class-selector">
          This heading has the same style as the paragraph above.
        </h4>

        <p className="wd-ai-class-selector">
          This is a sample paragraph styled with a class selector,
          using a dark green background and gold text.
        </p>

        <h4 className="wd-ai-class-selector">
          This sample heading shares the same class as the paragraph above.
        </h4>

        <p className="wd-my-class">
          This paragraph uses my custom CSS class.
        </p>

        <h4 className="wd-my-class">
          This heading uses the same custom CSS class.
        </h4>
      </div>
    </div >
  );
}
