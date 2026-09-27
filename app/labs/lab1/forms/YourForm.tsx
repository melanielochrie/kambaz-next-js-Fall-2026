export default function YourForm() {
    return (
        <form id="wd-your-form">
            <h4>Student Profile</h4>

            <label htmlFor="wd-your-first-name">First Name:</label>
            <br />
            <input
                type="text"
                id="wd-your-first-name"
            />
            <br />

            <label htmlFor="wd-your-last-name">Last Name:</label>
            <br />
            <input
                type="text"
                id="wd-your-last-name"
            />
            <br />

            <label htmlFor="wd-your-student-id">Student ID:</label>
            <br />
            <input
                type="text"
                id="wd-your-student-id"
            />
            <br />

            <br />

            <p>Class standing:</p>

            <input
                type="radio"
                name="class-standing"
                id="wd-your-undergraduate"
            />
            <label htmlFor="wd-your-undergraduate">Undergraduate</label>
            <br />

            <input
                type="radio"
                name="class-standing"
                id="wd-your-graduate"
                defaultChecked
            />
            <label htmlFor="wd-your-graduate">Graduate</label>

            <p>Enrollment status:</p>

            <input
                type="radio"
                name="enrollment-status"
                id="wd-your-full-time"
                defaultChecked
            />
            <label htmlFor="wd-your-full-time">Full-time</label>
            <br />

            <input
                type="radio"
                name="enrollment-status"
                id="wd-your-part-time"
            />
            <label htmlFor="wd-your-part-time">Part-time</label>
        </form>
    );
}