import styles from './About.module.scss';
import PageTitle from '../PageTitle/PageTitle';

const About = () => {
    return (
      <div className={styles.heroAbout}>
        <PageTitle>About</PageTitle>
        <p className={styles.subtitle}>Lorem ipsum dolor sit amet.</p>
      </div>
    );
  };

  export default About;