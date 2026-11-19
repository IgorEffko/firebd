import { db } from "./firebase.js";
import {
    collection,
    addDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

export async function inserirUsuario(nome, email) {
    await addDoc(collection(db, "usuarios"), {
        nome: nome,
        email: email
    });
}