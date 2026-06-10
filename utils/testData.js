const fs = require('fs-extra');

function gerarUsuario() {

    const timestamp = Date.now();

    return {
        nome: 'Ryan QA',
        email: `qa${timestamp}@teste.com`,
        senha: 'Teste@123'
    };
}

async function salvarUsuario(usuario) {

    await fs.writeJson(
        './fixtures/createdUser.json',
        usuario,
        { spaces: 2 }
    );
}

async function obterUsuario() {

    return await fs.readJson(
        './fixtures/createdUser.json'
    );
}

module.exports = {
    gerarUsuario,
    salvarUsuario,
    obterUsuario
};