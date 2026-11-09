"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAccountContext, type User } from "../AccountContext";

type ProfileState = User & { dob?: string };

export default function Profile() {
  const [profile, setProfile] = useState<ProfileState | null>(null);
  const { currentUser, setCurrentUser } = useAccountContext();
  const router = useRouter();
  const inputStyle =
    "w-full rounded border border-neutral-300 px-3 py-2";

  useEffect(() => {
    if (!currentUser) {
      router.push("/account/signin");
      return;
    }
    setProfile(currentUser);
  }, [currentUser, router]);

  const signout = () => {
    setCurrentUser(null);
    router.push("/account/signin");
  };

  if (!profile) return null;
  return (
    <div id="wd-profile-screen" className="max-w-md">
      <h1 className="mb-4 text-2xl font-semibold">
        Profile
      </h1>

      <div className="mb-4">
        <label htmlFor="wd-username" className="mb-2 block font-semibold">
          Username
        </label>
        <input
          id="wd-username"
          placeholder="username"
          className={`wd-username ${inputStyle}`}
          value={profile.username ?? ""}
          onChange={(e) => setProfile({ ...profile, username: e.target.value })}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="wd-password" className="mb-2 block font-semibold">
          Password
        </label>
        <input
          id="wd-password"
          type="password"
          placeholder="password"
          className={`wd-password ${inputStyle}`}
          value={profile.password ?? ""}
          onChange={(e) => setProfile({ ...profile, password: e.target.value })}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="wd-firstname" className="mb-2 block font-semibold">
          First Name
        </label>
        <input
          id="wd-firstname"
          placeholder="First Name"
          className={inputStyle}
          value={profile.firstName ?? ""}
          onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="wd-lastname" className="mb-2 block font-semibold">
          Last Name
        </label>
        <input
          id="wd-lastname"
          placeholder="Last Name"
          className={inputStyle}
          value={profile.lastName ?? ""}
          onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="wd-dob" className="mb-2 block font-semibold">
          Date of Birth
        </label>
        <input
          id="wd-dob"
          type="date"
          className={inputStyle}
          value={profile.dob ?? ""}
          onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="wd-email" className="mb-2 block font-semibold">
          Email
        </label>
        <input
          id="wd-email"
          type="email"
          className={inputStyle}
          value={profile.email ?? ""}
          onChange={(e) => setProfile({ ...profile, email: e.target.value })}
        />
      </div>

      <div className="mb-6">
        <label htmlFor="wd-role" className="mb-2 block font-semibold">
          Role
        </label>
        <select
          id="wd-role"
          className={inputStyle}
          value={profile.role ?? ""}
          onChange={(e) => setProfile({ ...profile, role: e.target.value })}
        >
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
          <option value="FACULTY">Faculty</option>
          <option value="STUDENT">Student</option>
          <option value="TA">TA</option>
        </select>
      </div>

      <button
        type="button"
        onClick={signout}
        id="wd-signout-btn"
        className="block w-full rounded bg-red-600 px-3 py-2 text-center text-white"
      >
        Sign out
      </button>
    </div>
  );
}
