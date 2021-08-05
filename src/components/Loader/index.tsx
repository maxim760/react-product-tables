import React from 'react';
import styles from './loader.module.css';

interface LoaderProps {
  text?: string;
}

export const Loader: React.FC<LoaderProps> = ({ text }) => {
  return (
    <div className={styles.wrapper}>
    <div className={styles.ripple}>
      <div></div>
      <div></div>
      </div>
      {!!text && <p className={styles.text}>{ text }</p>}
    </div>
  );
};
