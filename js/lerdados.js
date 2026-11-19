import { db } from "./firebase.js";
import { inserirUsuario } from "./inserir.js";
import { editarUsuario } from "./editar.js";
import { excluirUsuario } from "./excluir.js";

import {
    collection,
    onSnapshot
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const form = document.getElementById("formUsuario");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const lista = document.getElementById("listaUsuarios");
const mensagem = document.getElementById("mensagem");
const btnSalvar = document.getElementById("btnSalvar");
const btnCancelar = document.getElementById("btnCancelar");
const titulo = document.getElementById("tituloForm");

let idEditando = null;



form.addEventListener("submit", async (e) => {
    e.preventDefault();

    try {
        if (idEditando === null) {
            await inserirUsuario(nome.value, email.value);
            mensagem.textContent = "Cadastro realizado!";
        } else {
            await editarUsuario(idEditando, nome.value, email.value);
            mensagem.textContent = "Alteração realizada!";
        }

        form.reset();
        idEditando = null;
        btnSalvar.textContent = "Cadastrar";
        titulo.textContent = "Cadastrar usuário";
        btnCancelar.hidden = true;

    } catch (erro) {
        mensagem.textContent = "Erro: " + erro.message;
    }
});


onSnapshot(collection(db, "usuarios"), (snapshot) => {
    lista.innerHTML = "";

    snapshot.forEach((documento) => {
        const usuario = documento.data();
        const id = documento.id;

        const linha = document.createElement("tr");

        linha.innerHTML = `
            <td>${usuario.nome}</td>
            <td>${usuario.email}</td>
            <td></td>
        `;

        const acoes = linha.querySelector("td:last-child");

       
    const btnEditar = document.createElement("button");
        btnEditar.textContent = "Editar";
        btnEditar.className = "editar";

        btnEditar.onclick = () => {
            idEditando = id;
            nome.value = usuario.nome;
            email.value = usuario.email;

            btnSalvar.textContent = "Salvar alterações";
             titulo.textContent = "Editar usuário";
            btnCancelar.hidden = false;
        };

        
        const btnExcluir = document.createElement("button");
        btnExcluir.textContent = "Excluir";
    btnExcluir.className = "excluir";

        btnExcluir.onclick = async () => {
            if (confirm("Deseja excluir este usuário?")) {
                try {
                    await excluirUsuario(id);
                    mensagem.textContent = "Usuário excluído!";
                } catch (erro) {
                    mensagem.textContent = "Erro: " + erro.message;
                }
            }
        };

        acoes.appendChild(btnEditar);
          acoes.appendChild(btnExcluir);

        lista.appendChild(linha);
    });
});



btnCancelar.onclick = () => {
    form.reset();
     idEditando = null;
    btnSalvar.textContent = "Cadastrar";
    titulo.textContent = "Cadastrar usuário";
btnCancelar.hidden = true;
    mensagem.textContent = "";
};