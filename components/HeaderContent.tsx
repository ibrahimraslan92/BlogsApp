import Link from "next/link";
import React from "react";


const HeaderContent = () => {

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl">
          All blogs
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/blogs" className="btn btn-ghost text-xl">
             My blogs
            </Link>
          </li>
          <li>
          <Link href="/sign-in" className="btn btn-ghost text-xl">
             sign in
            </Link>
            <li>
            <Link href="/sign-up" className="btn btn-ghost text-xl">
             sign up
            </Link>
          </li>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderContent;
