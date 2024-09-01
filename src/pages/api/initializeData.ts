import type { NextApiRequest, NextApiResponse } from 'next';
import { database } from '../../lib/firebaseConfig';
import { ref, set } from 'firebase/database';

const data = {
  "hot-list": {
    "1": {
      "name": "TRX/INR",
      "price": "₹ 13.76984",
      "change": "-0.38 %",
      "trade": "Trade"
    },
    "2": {
      "name": "POX/INR",
      "price": "₹ 28.86",
      "change": "4.56 %",
      "trade": "Trade"
    },
    "3": {
        "name": "BEER/INR",
        "price": "₹ 0.001445",
        "change": "-18.49 %",
        "trade": "Trade"
      },
      "4": {
        "name": "MATIC/INR",
        "price": "₹ 36.1304",
        "change": "-2.05 %",
        "trade": "Trade"
      },
      "5":{
      "name":  "SOURCE/INR",
      "price": "₹ 0.700",
      "change": "-0.14 %",
      "trade": "Trade"
      }
  },
  
    "new-list": {
      "1": {
        "name": "TLOS/USDT",
        "price": "$ 0.2517",
        "change": "2.40 %",
        "trade": "Trade"
      },
      "2": {
        "name": "TLOS/INR",
        "price": "₹ 22.21",
        "change": "1.09 %",
        "trade": "Trade"
      },
      "3": {
        "name": "JAIHO/INR",
        "price": "₹ 0.1197",
        "change": "-11.92 %",
        "trade": "Trade"
      },
      "4": {
        "name": "PIVX/USDT",
        "price": "$ 0.1965",
        "change": "-1.99 %",
        "trade": "Trade"
      },
      "5": {
        "name": "PIVX/INR",
        "price": "₹ 17.278",
        "change": "-1.99 %",
        "trade": "Trade"
      },
      "6": {
        "name": "ZRO/USDT",
        "price": "$ 3.947",
        "change": "-5.21 %",
        "trade": "Trade"
      },
      "7": {
        "name": "ZRO/INR",
        "price": "₹ 347.06",
        "change": "-5.21 %",
        "trade": "Trade"
      },
      "8": {
        "name": "TYCO/USDT",
        "price": "$ 0.0000044",
        "change": "-21.42 %",
        "trade": "Trade"
      },
      "9": {
        "name": "TYCO/INR",
        "price": "₹ 0.00055",
        "change": "0.00 %",
        "trade": "Trade"
      }
    }
  };
  

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await set(ref(database, 'hot-list'), data['hot-list']);
    await set(ref(database, 'new-list'), data['new-list']);
    res.status(200).json({ message: 'Data added successfully' });
  } catch (error) {
    console.error('Error adding data:', error);
    res.status(500).json({ message: 'Error adding data' });
  }
}
