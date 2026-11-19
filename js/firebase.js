import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
apiKey: "AIzaSyCDpeu2wq4vbEdABiqclO_lBw13AA71x7A",
authDomain: "aulaunioeste-a158a.firebaseapp.com",
projectId: "aulaunioeste-a158a",
storageBucket: "aulaunioeste-a158a.firebasestorage.app",
messagingSenderId: "18771439631",
appId: "1:18771439631:web:86e115f4e856a49cfbf37a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);