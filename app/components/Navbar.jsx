import Link from "next/link";
import Image from "next/image";
import Logo from "./logo.png";
import LogoutButton from "./LogoutButton";

export default function Navbar({ user }) {
  return (
    <nav>
      <Image
        src={Logo}
        alt="Helpdesk logo"
        width={60}
        placeholder="blur"
        quality={100}
      />
      <h1>Helpdesk United</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
      <Link href="/tickets/create" className="mr-auto">
        Create
      </Link>

      {user && <span>Hi, {user.email}</span>}
      <LogoutButton />
    </nav>
  );
}
