import Link from "next/link";
import Navbar from "../components/Navbar";

export default function AuthLayout({ children }) {
  return (
    <>
      <nav>
        <h1>United Helpdesk</h1>
        <Link href="/signup">Signup</Link>
        <Link href="/login">Login</Link>
      </nav>
      {children}
    </>
  );
}
