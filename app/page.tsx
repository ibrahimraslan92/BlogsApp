"use client";
import FormNewPost from "@/components/FormNewPost";
import HeaderContent from "@/components/HeaderContent";
import { db } from "@/app/firebase/config";
import { collection, addDoc } from "firebase/firestore";
import React, { useState } from "react";
import {useAuthState} from 'react-firebase-hooks/auth'
import {auth} from "@/app/firebase/config"
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

async function addDataToFireStore(title, content) {
  try {
    const docRef = await addDoc(collection(db, "blogs"), {
      title: title,
      content: content,
    });
    console.log("Document written with ID: ", docRef.id);
    return true;
  } catch (error) {
    console.error("error adding data in firestore", error);
    return false;
  }
}
export default function Home() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [user] = useAuthState(auth)
 const  router = useRouter()
  console.log({user});
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const added = await addDataToFireStore(title, content);
    if (added) {
      setTitle("");
      setContent("");
      alert("data added to firebase");
    }
  };

  return (
    <main>
      <HeaderContent></HeaderContent>
      <button onClick={() => {signOut(auth) 
      router.push('/sign-in')
      }} > log out</button>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg"
      >
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
            title
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-3 py-2 border rounded-1g focus:outline-none focus:border-blue-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="content"
            className="block text-gray-700 font-bold mb-2"
          >
            content
          </label>
          <textarea
            rows={5}
            id="content"
            className="w-full px-3 py-2 border rounded-1g focus:outline-none focus:border-blue-500"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
          >
            Add
          </button>
        </div>
      </form>
    </main>
  );
}
