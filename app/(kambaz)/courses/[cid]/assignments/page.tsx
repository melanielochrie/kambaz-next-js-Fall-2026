import AssignmentItem from "./AssignmentItem";

export default async function Assignments({
    params,
}: {
    params: Promise<{ cid: string }>;
}) {
    const { cid } = await params;
    return (
        <div id="wd-assignments">
            {/* search input, + Group, + Assignment */}
            <input
                id="wd-search-assignment"
                placeholder="Search for Assignments"
            />

            <button id="wd-add-assignment-group">+ Group</button>
            <button id="wd-add-assignment">+ Assignment</button>

            {/* h3 wd-assignments-title */}
            <h3 id="wd-assignments-title">
                ASSIGNMENTS 40% of Total <button>+</button>
            </h3>


            {/* at least three AssignmentItems using cid */}
            <ul id="wd-assignment-list">
                <AssignmentItem
                    cid={cid}
                    aid="A1"
                    title="A1 ENV + HTML"
                    details="Due date • 100 pts"
                />
                <AssignmentItem
                    cid={cid}
                    aid="A2"
                    title="A2 CSS + TAILWIND"
                    details="Due date • 100 pts"
                />

                <AssignmentItem
                    cid={cid}
                    aid="A3"
                    title="A3 JS + REACT"
                    details="Due date • 100 pts"
                />

            </ul>
        </div>
    );
}

