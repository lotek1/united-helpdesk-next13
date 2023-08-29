import Link from "next/link";
import Image from "next/image";
import Logo from "./logo.png";

export default function Navbar() {
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
      <Link href="/tickets/create">Create</Link>
    </nav>
  );
}
