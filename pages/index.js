import Head from 'next/head';
import Image from 'next/image';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1 className="title">Hello!</h1>
      <p className="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quia saepe architecto, totam tempora suscipit tempore dignissimos culpa adipisci nobis. Iste velit minus blanditiis quia ex
        culpa optio incidunt saepe.
      </p>
      <Link href="/coins">
        <a className="button">See all coins</a>
      </Link>
    </div>
  );
}
