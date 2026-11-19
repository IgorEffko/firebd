import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBS0-Fckg_4ve0CQLuAJg5hr-zTa0cvezU",
    authDomain: "cinevortex-dd43a.firebaseapp.com",
    projectId: "cinevortex-dd43a",
    storageBucket: "cinevortex-dd43a.firebasestorage.app",
    messagingSenderId: "181268129538",
    appId: "1:181268129538:web:96cc0b8f0a7b4e5535c41b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };