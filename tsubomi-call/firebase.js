import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
	apiKey: "AIzaSyCXVKJOZvUOtkOXnEP1KaF6eXdGcnQl3oE",
	authDomain: "tsubomi-uketsuke.firebaseapp.com",
	projectId: "tsubomi-uketsuke",
	storageBucket: "tsubomi-uketsuke.firebasestorage.app",
	messagingSenderId: "455636256976",
	appId: "1:455636256976:web:a8d2f20f09502c66a476d5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
