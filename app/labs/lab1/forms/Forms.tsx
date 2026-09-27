import RadioButtons from "./RadioButtons";
import TextFields from "./TextFields";
import Textarea from "./Textarea";
import Checkboxes from "./Checkboxes";
import Dropdowns from "./Dropdowns";
import OtherFieldTypes from "./OtherFieldTypes";

export default function Forms() {
    return (
        <div id="wd-forms">
            <h4>Form Elements</h4>

            <form id="wd-text-fields">
                <TextFields />
                <Textarea />
                <RadioButtons />
                <Checkboxes />
                <Dropdowns />
                <OtherFieldTypes />

                {/* add the next form components here */}
            </form>
        </div>
    );
}