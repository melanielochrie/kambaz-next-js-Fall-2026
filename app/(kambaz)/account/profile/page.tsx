
import Link from "next/link";

export default function Profile() {
  const inputStyle =
    "w-full rounded border border-neutral-300 px-3 py-2";

  return (
    <div id="wd-profile-screen" className="max-w-md">
      <h1 className="mb-4 text-2xl font-semibold">
        Profile
      </h1>

      <div className="mb-4">
        <label className="mb-2 block font-semibold">
          Username
        </label>
        <input
          defaultValue="alice"
          placeholder="username"
          className={`wd-username ${inputStyle}`}
        />
      </div>

      <div className="mb-4">
        <label className="mb-2 block font-semibold">
          Password
        </label>
        <input
          defaultValue="123"
          placeholder="password"
          type="password"
          className={`wd-password ${inputStyle}`}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="wd-firstname" className="mb-2 block font-semibold">
          First Name
        </label>
        <input
          defaultValue="Alice"
          placeholder="First Name"
          id="wd-firstname"
          className={inputStyle}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="wd-lastname" className="mb-2 block font-semibold">
          Last Name
        </label>
        <input
          defaultValue="Wonderland"
          placeholder="Last Name"
          id="wd-lastname"
          className={inputStyle}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="wd-dob" className="mb-2 block font-semibold">
          Date of Birth
        </label>
        <input
          defaultValue="2000-01-01"
          type="date"
          id="wd-dob"
          className={inputStyle}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="wd-email" className="mb-2 block font-semibold">
          Email
        </label>
        <input
          defaultValue="alice@wonderland"
          type="email"
          id="wd-email"
          className={inputStyle}
        />
      </div>

      <div className="mb-6">
        <label htmlFor="wd-role" className="mb-2 block font-semibold">
          Role
        </label>
        <select
          defaultValue="FACULTY"
          id="wd-role"
          className={inputStyle}
        >
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
          <option value="FACULTY">Faculty</option>
          <option value="STUDENT">Student</option>
        </select>
      </div>

      <Link
        href="/account/signin"
        className="block w-full rounded bg-red-600 px-3 py-2 text-center text-white no-underline"
      >
        Sign out
      </Link>
    </div>
  );
}
