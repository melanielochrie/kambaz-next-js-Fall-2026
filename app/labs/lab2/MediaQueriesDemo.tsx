import "./MediaQueriesDemo.css";

export default function MediaQueriesDemo() {
  return (
    <div className="wd-media-queries-demo">
      <h2>Media Query Demo</h2>
      <p>
        This demo uses CSS media queries to change colors based on screen width:
      </p>
      <ul>
        <li className="wd-mq-rule-default">
          Below 750px: White text on Green background
        </li>
        <li className="wd-mq-rule-ai">
          Up to 749px (max-width: 749px): White text on Purple background
        </li>
        <li className="wd-mq-rule-750">
          750px to 999px: Black text on Yellow background
        </li>
        <li className="wd-mq-rule-1000">
          1000px to 1249px: White text on Blue background
        </li>
        <li className="wd-mq-rule-1250">
          1250px to 1499px: White text on Red background
        </li>
        <li className="wd-mq-rule-1500">
          1500px and wider: White text on Purple background
        </li>
      </ul>
    </div>
  );
}
