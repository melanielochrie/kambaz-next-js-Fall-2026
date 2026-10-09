import "./index.css";
import ForegroundColors from "./ForegroundColors";
import BackgroundColors from "./BackgroundColors";
import Borders from "./Borders";
import Corners from "./Corners";
import Display from "./Display";
import Dimensions from "./Dimensions";
import Padding from "./Padding";
import Margins from "./Margins";
import BoxModel from "./BoxModel";
import Positions from "./Positions";
import Zindex from "./Zindex";
import Float from "./Float";
import GridLayout from "./GridLayout";

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

      <div id="wd-css-document-structure">
        <div className="wd-selector-1">
          <h3>Document structure selectors</h3>
          <div className="wd-selector-2">
            Selectors can be combined to refer to elements
            in particular places in the document.

            <p className="wd-selector-3">
              This paragraph's red background is referenced
              as a descendant of an ancestor.
              <br />
              .wd-selector-1 .wd-selector-3
              <br />
              <span className="wd-selector-4">
                Whereas this span is a direct child of its parent.
              </span>

              <span className="wd-selector-5">
                This is my new element using a child selector.
              </span>

              <span className="wd-ai-selector-5">
                This sample span is styled as a descendant of .wd-selector-1.
              </span>

              <br />
              You can combine these relationships to create
              specific styles depending on the document structure.
            </p>
          </div>
        </div>
      </div>

      <div id="wd-css-specificity">
        <h3>CSS Selection Rule Mechanism</h3>

        <p id="wd-specificity-test" className="wd-specificity-class">
          This paragraph has multiple CSS rules, but only one style will win.
        </p>

        <section>
          <p id="wd-ai-cascade" className="wd-ai-cascade">
            This sample paragraph matches a tag, class, and ID rule that each
            set a different background color.
          </p>
        </section>
      </div>
      <ForegroundColors />
      <BackgroundColors />
      <Borders />
      <Corners />
      <Display />
      <Dimensions />
      <Padding />
      <Margins />
      <BoxModel />
      <Positions />
      <Zindex />
      <Float />
      <GridLayout />
    </div >
  );
}
