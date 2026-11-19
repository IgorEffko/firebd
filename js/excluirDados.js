import { db } from "./firebase.js";
import {
    doc,
    deleteDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

export async function excluirUsuario(id) {
    await deleteDoc(doc(db, "usuarios", id));
}