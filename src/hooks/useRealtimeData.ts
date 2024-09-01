import { useEffect, useState } from "react";
import { ref, onValue, update, DatabaseReference, DataSnapshot } from "firebase/database";
import { database } from "../lib/firebaseConfig";

type RealtimeData = { [key: string]: any } | null;

const useRealtimeData = (path: string): [RealtimeData, (newData: RealtimeData) => void] => {
  const [data, setData] = useState<RealtimeData>(null);

  useEffect(() => {
    const dbRef: DatabaseReference = ref(database, path);
    const unsubscribe = onValue(dbRef, (snapshot: DataSnapshot) => {
      setData(snapshot.val());
    });

    return () => unsubscribe();
  }, [path]);

  const updateData = (newData: RealtimeData) => {
    update(ref(database, path), newData);
  };

  return [data, updateData];
};

export default useRealtimeData;
