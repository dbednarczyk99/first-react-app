import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';

const Favorite = () => {
    return (
      <div className={styles.heroFavorite}>
        <PageTitle>Favorites</PageTitle>
        <p className={styles.subtitle}>Lorem ipsum dolor sit amet.</p>
      </div>
    );
  };

  export default Favorite;