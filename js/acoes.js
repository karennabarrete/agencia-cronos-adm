//VARIAVEL

let cursos = [{
    nome: "Desenvolvimento Web",
    imagem: "imagens/ilustra-web.png",
    descricao: "Consequatur debitis ipsa numquam illum placeat quod deleniti.",
    id: "1"
},
{
    nome: "Marketing Digital",
    imagem: "imagens/ilustra-marketing.png",
    descricao: "Consequatur debitis ipsa numquam illum placeat quod deleniti.",
    id: "2"

},
{
    nome: "Consultoria UX",
    imagem: "imagens/ilustra-ux.png",
    descricao: "Consequatur debitis ipsa numquam illum placeat quod deleniti.",
    id: "3"


}

]

const cadastrarCurso = () => {
    
    let htmlCursos = "";
    
    for (let i = 0; i < cursos.length; i++) {
        htmlCursos += `
            <tr data-index="${cursos[i].id}">
                <td>${cursos[i].nome}</td>
                <td><img src=${cursos[i].imagem} class="img-fluid" /></td>
                <td>${cursos[i].descricao}</td>
                <td>
                    <button data-action="editar" class="btn btn-secondary m-1">editar</button>
                    <button data-action="excluir" class="btn btn-danger m-1">excluir</button>
                </td>
            </tr>
        `    
    }
    
    let painelCursos = document.querySelector("#painel-cursos")

   
    painelCursos.innerHTML = htmlCursos;
}

cadastrarCurso ();

let botaoAdicionar = document.getElementById("btnAdicionar");

let modalAdicionar = document.getElementById("modalAdicionar");


function apareceModalAdicionar() {
    modalAdicionar.style.display = "block";

}

let inputNome = document.getElementById("nome-curso");

let inputImagem = document.getElementById("imagem-curso");

let inputDescricao = document.getElementById("descricao-curso");

let botaoCancelarAdicao = document.getElementById("botao-cancelar");

let botaoConfirmarAdicao = document.getElementById("botao-confirmar");

function cancelarAdicao(e) {
    e.preventDefault();

    modalAdicionar.style.display = "none";

    limpaInputAdicao();
}

function confirmarAdicao(e) {
   
    e.preventDefault();

   
    let idDoCurso = cursos.length + 1;
    
    let valorDoInputNome = inputNome.value;
    
    let valorDoInputImagem = inputImagem.value;
    
    let valorDoInputDescricao = inputDescricao.value;

    
    cursos.push({
        id: idDoCurso,
        nome: valorDoInputNome,
        imagem: valorDoInputImagem,
        descricao: valorDoInputDescricao
    })

    
    modalAdicionar.style.display = "none";
    
    
    cadastrarCurso();

    
    limpaInputAdicao();
}

function limpaInputAdicao() {
    inputNome.value = "";
    inputImagem.value = "";
    inputDescricao.value = "";
}

function cancelarEdicao(e) {
    e.preventDefault();
    modalEditar.style.display = "none";
}

function confirmarEdicao(e) {
    
    e.preventDefault();

    let id = document.getElementById("id-curso-edicao").value;

    for (let i = 0; i < cursos.length; i++) {
        if (cursos[i].id == id){
            
            cursos[i].nome = inputNomeEdicao.value;
            cursos[i].imagem = inputImagemEdicao.value;
            cursos[i].descricao = inputDescricaoEdicao.value;
        }
    }

    
    modalEditar.style.display = "none";
    
    
    cadastrarCurso();
}


let modalEditar = document.getElementById("modalEditar");


function apareceModalEditar(id) {
    modalEditar.style.display = "block";
    
    for (let i = 0; i < cursos.length; i++) {
        if (cursos[i].id == id){
            
            inputId.value = cursos[i].id;
            inputNomeEdicao.value = cursos[i].nome;
            inputImagemEdicao.value = cursos[i].imagem;
            inputDescricaoEdicao.value = cursos[i].descricao;
        }

    }
}


let inputId = document.getElementById("id-curso-edicao");

let inputNomeEdicao = document.getElementById("nome-curso-edicao");

let inputImagemEdicao = document.getElementById("imagem-curso-edicao");

let inputDescricaoEdicao = document.getElementById("descricao-curso-edicao");


let botaoCancelarEdicao = document.getElementById("botao-cancelar-edicao");

let botaoConfirmarEdicao = document.getElementById("botao-confirmar-edicao");


let botoesEditarExcluir = document.querySelector("#painel-cursos");

function editarCurso(id) {
    apareceModalEditar(id);
}

function excluirCurso(id) {
    for (let i = 0; i < cursos.length; i++) {
        
        if (cursos[i].id == id){
            cursos.splice(i, 1);
            cadastrarCurso();
        }
    };
}

function editarExcluir(e) {
    if (e.target.type == "submit") {
        let id = e.target.parentNode.parentNode.dataset.index;
        
        if (e.target.dataset.action == "editar") {
            editarCurso(id);

        } else if (e.target.dataset.action == "excluir") {
            excluirCurso(id);
        }

    }   
}
// EVENT LISTENERS

botaoAdicionar.addEventListener("click", apareceModalAdicionar);
 
botaoCancelarAdicao.addEventListener("click", cancelarAdicao);

botaoConfirmarAdicao.addEventListener("click", confirmarAdicao);


window.addEventListener("click", function (e) {
    if (e.target == modalAdicionar) {
        modalAdicionar.style.display = "none";
        limpaInputAdicao();
    }
    if (e.target == modalEditar) {
        modalEditar.style.display = "none";
    }
})


botaoCancelarEdicao.addEventListener("click", cancelarEdicao);

botaoConfirmarEdicao.addEventListener("click", confirmarEdicao);

botoesEditarExcluir.addEventListener("click", editarExcluir)


