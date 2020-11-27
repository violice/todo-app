import React from 'react';
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  headerContainer: {
    backgroundColor: '#673ab7',
    boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
    color: '#fff',
    marginBottom: '64px',
  },
  headerContent: {
    maxWidth: '1200px',
    height: '64px',
    margin: '0 auto',
    padding: '0px 24px',
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 500,
  },
});

const Header = () => {
  const styles = useStyles();
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <span className={styles.logo}>TODO</span>
      </div>
    </header>
  )
};

export default Header;