import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/n0vaes.png" alt="profile_img"/>
      <div>
        <strong>Alan Novaes</strong>
        <p>
          <img src="icons/level.svg" alt="level icon"/>
          level {level}
        </p>
      </div>
    </div>
  );
}