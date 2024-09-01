import React, { useState } from 'react';
import styles from '../styles/TabContent.module.css';
import useFirebaseData from '@/hooks/useFirebase';

interface TabContentProps {
  data: { [key: string]: { name: string, price: string, change: string, trade: string } };
}

const TabContent: React.FC<TabContentProps> = ({ data }) => {

    const hotList = useFirebaseData('hot-list'); 
  const newList = useFirebaseData('new-list');
  const [activeTab, setActiveTab] = useState<'hot-list' | 'new-list'>('hot-list');
  return (
    <div>
  

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
</div>
</div>
</div>
);
};


export default TabContent;
