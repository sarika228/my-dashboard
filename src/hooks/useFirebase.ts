import { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { database } from '../lib/firebaseConfig';

const useFirebaseData = (path: string) => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const dataRef = ref(database, path);

    const unsubscribe = onValue(dataRef, (snapshot) => {
      setData(snapshot.val());
    });
    return () => unsubscribe();
  }, [path]);

  return data;
};

export default useFirebaseData;
