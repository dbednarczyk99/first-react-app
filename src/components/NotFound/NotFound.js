import styles from './NotFound.module.scss';
import PageTitle from '../PageTitle/PageTitle';

const NotFound = () => {
    return (
      <div className={styles.heroFavorite}>
        <PageTitle>Error 404! Page not found</PageTitle>
        <p className={styles.subtitle}>Make sure you've entered the correct address.</p>
      </div>
    );
  };

  export default NotFound;