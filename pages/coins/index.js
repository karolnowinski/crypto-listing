import styles from '../../styles/Coin.module.css';
import Link from 'next/link';

export const getStaticProps = async () => {
  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
  const data = await res.json();

  return {
    props: {
      coins: data,
    },
  };
};

const Coins = ({ coins }) => (
  <>
    <h1 className="title">Cryptocurrency Prices by Market Cap</h1>
    {coins.map((coin) => (
      <Link href={'/coins/' + coin.id} key={coin.id}>
        <a className={styles.single}>
          <div className={styles.number}>{coin.market_cap_rank}</div>
          <div className={styles.image}>
            <img width="40" height="40" src={coin.image} alt={`${coin.name} logo`} />
          </div>
          <div className={styles.info}>
            <div className={styles.info__top}>
              <h2>{coin.name}</h2>
              <span className={`${styles.price} ${coin.price_change_24h < 0 ? styles.increase : styles.decrease}`}>{coin.current_price}</span>
            </div>
            <div className={styles.info__bottom}>
              <span className={styles.ath}>ATH: {coin.ath}</span>
              <span>ATH date: {new Date(coin.ath_date).toDateString()}</span>
            </div>
          </div>
        </a>
      </Link>
    ))}
  </>
);

export default Coins;
