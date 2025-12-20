import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB_IZVkfxMRC-UAVcNBvj1YKQMrNTwYsLk",
  authDomain: "ecommercewolf.firebaseapp.com",
  projectId: "ecommercewolf",
  storageBucket: "ecommercewolf.firebasestorage.app",
  messagingSenderId: "96952037776",
  appId: "1:96952037776:web:730b559c3bd3d1db190315",
  measurementId: "G-RD3JSFBX28"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);