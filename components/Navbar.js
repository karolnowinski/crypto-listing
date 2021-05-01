import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => (
  <nav>
    <div className="logo">
      <Image width={60} height={60} src="/logo.svg" alt="Crypto" />
    </div>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/about">
      <a>About</a>
    </Link>
    <Link href="/coins">
      <a>Cryptos Listing</a>
    </Link>
  </nav>
);

export default Navbar;
