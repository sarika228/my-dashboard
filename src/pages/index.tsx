import { NextPage } from 'next';
import useFirebaseData from '../hooks/useFirebase';
import styles from '../styles/TabContent.module.css';
import { useState } from 'react';

const HomePage: NextPage = () => {
  const hotList = useFirebaseData('hot-list'); 
  const newList = useFirebaseData('new-list');
  const [activeTab, setActiveTab] = useState<'hot-list' | 'new-list'>('hot-list');

  const [status, setStatus] = useState<string | null>(null);

  const handleInitializeData = async () => {
    try {
      const response = await fetch('/api/initializeData', {
        method: 'POST',
      });
      const data = await response.json();
      if (response.ok) {
        setStatus('Data added successfully');
      } else {
        setStatus(data.message || 'An error occurred');
      }
    } catch (error) {
      setStatus('An error occurred');
      console.error('Error:', error);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Catch Your Next Trading Opportunity</h1>

      <div className={styles.tabs}>
        <button 
          className={`${styles.tab} ${activeTab === 'hot-list' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('hot-list')}
        >
          Hot List
        </button>
        <button 
          className={`${styles.tab} ${activeTab === 'new-list' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('new-list')}
        >
          New List
        </button>
      </div>

      <div className={styles.content}>
        <div className={styles.headingRow}>
          <div className={styles.headingItem}>Trending Pairs</div>
          <div className={styles.headingItem}>Last Price</div>
          <div className={styles.headingItem}>24 hrs change</div>
          <div className={styles.headingItem}>Trade</div>
        </div>
        
        <div className={styles.dataTable}>
          {activeTab === 'hot-list' ? (
            hotList ? (
              Object.entries(hotList).map(([key, item]) => (
                <div className={styles.row} key={key}>
                  <div className={styles.cell}>{item.name}</div>
                  <div className={styles.cell}>{item.price}</div>
                  <div className={styles.cell}>{item.change}</div>
                  <div className={styles.cell}>{item.trade}</div>
                </div>
              ))
            ) : (
              <p>Loading...</p>
            )
          ) : (
            newList ? (
              Object.entries(newList).map(([key, item]) => (
                <div className={styles.row} key={key}>
                  <div className={styles.cell}>{item.name}</div>
                  <div className={styles.cell}>{item.price}</div>
                  <div className={styles.cell}>{item.change}</div>
                  <div className={styles.cell}>{item.trade}</div>
                </div>
              ))
            ) : (
              <p>Loading...</p>
            )
          )}

        <div className={styles.button}>
        <button  onClick={handleInitializeData}>Initialize Data</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
