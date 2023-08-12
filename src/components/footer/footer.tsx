// components/Footer.tsx
import React from 'react';
import styles from './footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} TaskHub Inc.</p>
    </footer>
  );
};

export default Footer;
