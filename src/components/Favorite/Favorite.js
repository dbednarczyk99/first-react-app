import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import FavoriteList from '../FavoriteList/FavoriteList';

const Favorite = () => {
    return (
      <>
        <div className={styles.heroFavorite}>
          <PageTitle>Favorites</PageTitle>
          <p className={styles.subtitle}></p>
        </div>
        <FavoriteList />
      </>
    );
  };

  export default Favorite;