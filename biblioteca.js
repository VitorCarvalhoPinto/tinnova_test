class Livro{
    constructor(titulo, autor){
        this.titulo = titulo 
        this.autor = autor 
        this.emprestado = false 
    }
}

const livros = []

function RegistrarLivro(titulo, autor){
    const livro = new Livro(titulo, autor)
    livros.push(livro)
    console.log("Livro registrado com sucesso.")
}


function EmprestarLivro(titulo) {
    for (const livro of livros) {
        if (livro.titulo === titulo) {
            if (!livro.emprestado) {
                livro.emprestado = true;
                console.log("Livro emprestado com sucesso.");
                return;
            } else {
                console.log("Livro já está emprestado.");
                return;
            }
        }
    }
    console.log("Livro não encontrado.");
}


function DevolverLivro(titulo) {
    for (const livro of livros) {
        if (livro.titulo === titulo) {
            if (livro.emprestado) {
                livro.emprestado = false;
                console.log("Livro devolvido com sucesso.");
                return;
            } else {
                console.log("O livro não estava emprestado.");
                return;
            }
        }
    }
    console.log("Livro não encontrado.");
}

function ListarLivrosDisponiveis() {
    let livrosDisponiveis = false;
    for (const livro of livros) {
        if (!livro.emprestado) {
            console.log(`Título: ${livro.titulo}, Autor: ${livro.autor}`);
            livrosDisponiveis = true;
        }
    }
    if (!livrosDisponiveis) {
        console.log("Nenhum livro disponível no momento.");
    }
}


RegistrarLivro("O Senhor dos Anéis", "J.R.R. Tolkien")
RegistrarLivro("1984", "George Orwell")
ListarLivrosDisponiveis()

EmprestarLivro("1984")
ListarLivrosDisponiveis()

DevolverLivro("1984")
ListarLivrosDisponiveis()