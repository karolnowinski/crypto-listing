import styles from '../../styles/Coin.module.css';

export const getStaticPaths = async () => {
  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
  const data = await res.json();

  const paths = data.map((coin) => {
    return {
      params: { id: coin.id },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&page=1&sparkline=false&ids=' + id);
  let data = await res.json();
  data = { ...data[0] };

  return {
    props: {
      coin: data,
    },
  };
};

const Details = ({ coin }) => {
  return (
    <>
      <article key={coin.id} className={styles.single}>
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
      </article>
    </>
  );
};

export default Details;
