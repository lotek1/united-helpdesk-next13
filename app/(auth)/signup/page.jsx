"use client";

import AuthForm from "../AuthForm";

export default function signup() {
  const handleSubmit = async (e, email, password) => {
    e.preventDefault();
    console.log("Signup page:", email, password);
  };
  return (
    <main className="text-center">
      <h2>signup</h2>
      <AuthForm handleSubmit={handleSubmit} />
    </main>
  );
}
