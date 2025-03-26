import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDd3VbK7gDa4kt57gYjFGfsMbydnn7hxBc",
  authDomain: "database-1b66c.firebaseapp.com",
  projectId: "database-1b66c",
  storageBucket: "database-1b66c.firebasestorage.app",
  messagingSenderId: "1064903079151",
  appId: "1:1064903079151:web:0f6002b450fb414f64971a",
  measurementId: "G-XSBE13DXR8",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
