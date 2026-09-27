import TextFields from "./TextFields";
import Textarea from "./Textarea";

export default function Forms() {
  return (
    <div id="wd-forms">
      <h4>Form Elements</h4>

      <form id="wd-text-fields">
        <TextFields />
        <Textarea />

        {/* add the next form components here */}
      </form>
    </div>
  );
}