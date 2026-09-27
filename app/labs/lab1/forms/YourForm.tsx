export default function YourForm() {
    return (
        <form id="wd-your-form">
            <h4>Student Profile</h4>

            <label htmlFor="wd-your-first-name">First Name:</label>
            <br />
            <input
                type="text"
                id="wd-your-first-name"
                placeholder="Jane"
                defaultValue="Melanie"
            />
            <br />

            <label htmlFor="wd-your-last-name">Last Name:</label>
            <br />
            <input
                type="text"
                id="wd-your-last-name"
                placeholder="Doe"
                defaultValue="Lochrie"
            />
            <br />

            <label htmlFor="wd-your-username">Username:</label>
            <br />
            <input
                type="text"
                id="wd-your-username"
                placeholder="janedoe"
                defaultValue="lochrie.m"
            />
            <br />

            <label htmlFor="wd-your-password">Password:</label>
            <br />
            <input
                type="password"
                id="wd-your-password"
                placeholder="password"
                defaultValue="NEUpassword"
            />
            <br />

            <label htmlFor="wd-your-student-id">Student ID:</label>
            <br />
            <input
                type="text"
                id="wd-your-student-id"
                placeholder="000000000"
                defaultValue="002562627"
            />
            <br />

            <br />
            <label htmlFor="wd-your-bio">Why I am taking this course:</label>
            <br />

            <textarea
                id="wd-your-bio"
                rows={4}
                cols={50}
                placeholder="Tell us about yourself"
                defaultValue="I am taking this course to learn about web development and build my software development skills. I own a small business and want to utilize these skills for my business."
            />

            <br />
            <br />

            <p>Class standing:</p>

            <input
                type="radio"
                name="wd-your-class-standing"
                id="wd-your-freshman"
            />
            <label htmlFor="wd-your-freshman">Freshman</label>
            <br />

            <input
                type="radio"
                name="wd-your-class-standing"
                id="wd-your-sophomore"
            />
            <label htmlFor="wd-your-sophomore">Sophomore</label>
            <br />

            <input
                type="radio"
                name="wd-your-class-standing"
                id="wd-your-junior"
            />
            <label htmlFor="wd-your-junior">Junior</label>
            <br />

            <input
                type="radio"
                name="wd-your-class-standing"
                id="wd-your-senior"
            />
            <label htmlFor="wd-your-senior">Senior</label>
            <br />

            <input
                type="radio"
                name="wd-your-class-standing"
                id="wd-your-graduate"
                defaultChecked
            />
            <label htmlFor="wd-your-graduate">Graduate</label>

            <p>Enrollment status:</p>

            <input
                type="radio"
                name="wd-your-enrollment-status"
                id="wd-your-full-time"
                defaultChecked
            />
            <label htmlFor="wd-your-full-time">Full-time</label>
            <br />

            <input
                type="radio"
                name="wd-your-enrollment-status"
                id="wd-your-part-time"
            />
            <label htmlFor="wd-your-part-time">Part-time</label>

            <br />
            <br />

            <p>Careers I am interested in:</p>

            <input
                type="checkbox"
                id="wd-your-web-development"
                defaultChecked
            />
            <label htmlFor="wd-your-web-development">Web Development</label>
            <br />

            <input
                type="checkbox"
                id="wd-your-cybersecurity"
                defaultChecked
            />
            <label htmlFor="wd-your-cybersecurity">Cybersecurity</label>
            <br />

            <input
                type="checkbox"
                id="wd-your-front-end"
                defaultChecked
            />
            <label htmlFor="wd-your-front-end">Front-End Development</label>
            <br />

            <input
                type="checkbox"
                id="wd-your-data-science"
            />
            <label htmlFor="wd-your-data-science">Data Science</label>

            <br />
            <br />

            <label htmlFor="wd-your-major">Major:</label>
            <br />

            <select
                id="wd-your-major"
                defaultValue="COMPUTER_SCIENCE"
            >
                <option value="COMPUTER_SCIENCE">Computer Science</option>
                <option value="DATA_SCIENCE">Data Science</option>
                <option value="CYBERSECURITY">Cybersecurity</option>
                <option value="INFORMATION_SYSTEMS">Information Systems</option>
            </select>

            <br />
            <br />

            <label htmlFor="wd-your-topics">
                Topics I want to deepen this term:
            </label>
            <br />

            <select
                id="wd-your-topics"
                multiple
                defaultValue={["WEB_DEVELOPMENT", "REACT"]}
            >
                <option value="WEB_DEVELOPMENT">Web Development</option>
                <option value="CYBERSECURITY">Cybersecurity</option>
                <option value="REACT">React</option>
                <option value="DATABASES">Databases</option>
            </select>

            <br />
            <br />

            <label htmlFor="wd-your-email">School Email:</label>
            <br />

            <input
                type="email"
                id="wd-your-email"
                placeholder="jane@university.edu"
                defaultValue="lochrie.m@northeastern.edu"
            />

            <br />
            <br />

            <label htmlFor="wd-your-graduation-year">
                Expected Graduation Year:
            </label>
            <br />

            <input
                type="number"
                id="wd-your-graduation-year"
                min={2026}
                max={2030}
                defaultValue={2028}
            />

            <br />
            <br />

            <label htmlFor="wd-your-program-start">
                Program Start Date:
            </label>
            <br />

            <input
                type="date"
                id="wd-your-program-start"
                defaultValue="2026-09-01"
            />

            <br />
            <br />

            <label htmlFor="wd-your-excitement">
                How excited are you about this course? (0–10):
            </label>
            <br />

            <input
                type="range"
                id="wd-your-excitement"
                min={0}
                max={10}
                defaultValue={8}
            />
            <br />
            <br />

            <button
                type="submit"
                id="wd-your-save"
            >
                Save
            </button>

            {" "}

            <button
                type="button"
                id="wd-your-cancel"
            >
                Cancel
            </button>
        </form>
    );
}
