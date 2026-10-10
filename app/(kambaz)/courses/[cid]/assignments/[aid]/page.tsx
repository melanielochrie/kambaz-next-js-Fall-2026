
import Link from "next/link";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid } = await params;

  return (
    <div id="wd-assignments-editor" className="max-w-3xl p-4">
      <h2 className="mb-6 text-2xl font-bold">
        Assignment Editor
      </h2>

      <div className="mb-4">
        <label
          htmlFor="wd-name"
          className="mb-2 block font-semibold"
        >
          Assignment Name
        </label>
        <input
          id="wd-name"
          type="text"
          defaultValue="A1 - ENV + HTML"
          className="w-full rounded border border-neutral-300 p-2"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="wd-description"
          className="mb-2 block font-semibold"
        >
          Description
        </label>
        <textarea
          id="wd-description"
          rows={5}
          defaultValue="The assignment is available online. Submit a link to the landing page of your Web application running on Vercel."
          className="w-full rounded border border-neutral-300 p-2"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="wd-points"
          className="mb-2 block font-semibold"
        >
          Points
        </label>
        <input
          id="wd-points"
          type="number"
          defaultValue={100}
          className="w-full rounded border border-neutral-300 p-2"
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="wd-due-date"
          className="mb-2 block font-semibold"
        >
          Due Date
        </label>
        <input
          id="wd-due-date"
          type="datetime-local"
          className="w-full rounded border border-neutral-300 p-2"
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="wd-ai-editor-notes"
          className="mb-2 block font-semibold"
        >
          Sample notes
        </label>
        <textarea
          id="wd-ai-editor-notes"
          rows={3}
          className="w-full rounded border border-neutral-300 p-2"
        />
      </div>

      <div className="flex justify-end gap-3 border-t pt-4">
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-cancel"
          className="rounded border border-neutral-300 bg-white px-4 py-2 text-black no-underline"
        >
          Cancel
        </Link>

        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-save"
          className="rounded bg-red-600 px-4 py-2 text-white no-underline"
        >
          Save
        </Link>
      </div>
    </div>
  );
}
