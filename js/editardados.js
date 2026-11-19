import { db } from "./firebase.js";
import {
    doc,
    updateDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

export async function editarUsuario(id, nome, email) {
    await updateDoc(doc(db, "usuarios", id), {
        nome: nome,
        email: email
    });
}