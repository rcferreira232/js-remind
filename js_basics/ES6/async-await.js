function buscarDados() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dados = { nome: 'Lucas', idade: 25 };
            resolve(dados);
            // reject(new Error('Erro ao buscar os dados.'));
        }, 2000);
    });
}

async function obterDados() {
    try {
        const dados = await buscarDados();
        console.log(dados);
    }catch (erro){
        console.error(erro);
    }
}

obterDados();
