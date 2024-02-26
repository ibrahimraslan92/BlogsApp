'use client'
import { db } from '@/app/firebase/config';
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore'

async function fetchDataFromFirestore(){

const querySnapshot = await getDocs(collection(db, "blogs"))

const data = [];
querySnapshot. forEach((doc) => {
data.push({ id: doc.id, ... doc.data()});
});
return data;
}

const Page = () => {
    const [blogData, setBlogData] = useState([]);

    useEffect(() => {
        async function fetchData() {
        const data = await fetchDataFromFirestore();
        setBlogData(data);
        }
        fetchData();
    },[]);


  return (
    <div>
{blogData.map((blog) => (
<div key={blog.id} className='mb-4'>
<p className='text-xl font-bold'>{blog.title}</p>
<p>{blog.content}</p>
</div>
))}

    </div>
  )
}

export default Page