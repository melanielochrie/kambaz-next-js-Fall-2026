"use client";

import { useParams } from "next/navigation";
import Module from "./Module";
import Lesson from "./Lesson";
import { useModulesStore } from "../../../store/modulesStore";

export default function Modules() {
    const { cid } = useParams();
    const modules = useModulesStore((state) => state.modules);
    const addModule = useModulesStore((state) => state.addModule);
    const courseModules = modules.filter((module) => module.course === cid); return (
        <div>
            <div className="mb-3 flex flex-wrap items-center gap-2">
                <button
                    type="button"
                    className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm"
                >
                    Collapse All
                </button>

                <button
                    type="button"
                    className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm"
                >
                    View Progress
                </button>

                <select
                    defaultValue="publish-all"
                    className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm"
                >
                    <option value="publish-all">Publish All</option>
                </select>
                <button
                    type="button"
                    className="rounded border border-red-600 bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
                    onClick={() => {
                        const name = prompt("Module name:");
                        if (name?.trim()) {
                            addModule({ name: name.trim(), course: String(cid) });
                        }
                    }}
                >
                    + Module
                </button>
            </div>

            <ul id="wd-modules" className="m-0 list-none p-0">
                {courseModules.map((module) => (
                    <Module key={module._id} module={module}>
                        {module.lessons?.map((lesson) => (
                            <Lesson key={lesson._id} title={lesson.name} />
                        ))}
                    </Module>
                ))}
            </ul>
        </div>
    );
}
