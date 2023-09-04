"use client";

import AuthForm from "../AuthForm";

export default function login() {
  const handleSubmit = async (e, email, password) => {
    e.preventDefault();
    console.log("login page", email, password);
  };
  return (
    <main className="text-center">
      <h2>Log in</h2>
      <AuthForm handleSubmit={handleSubmit} />
    </main>
  );
}
