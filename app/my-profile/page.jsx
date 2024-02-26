'use client'
import { useState } from "react";

function Profile() {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleBioChange = (e) => {
    setBio(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your profile update logic here
    console.log("Name:", name);
    console.log("Bio:", bio);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="max-w-md w-full bg-gray-800 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold text-white mb-8">Profile</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full mt-1 p-2 rounded-md bg-gray-700 text-white"
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="bio" className="text-gray-300">
              Bio
            </label>
            <textarea
              id="bio"
              className="w-full mt-1 p-2 rounded-md bg-gray-700 text-white"
              value={bio}
              onChange={handleBioChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
}

export default Profile;
