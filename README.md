# QA E-commerce Automation - Playwright

## Sobre o Projeto

Projeto de automação de testes desenvolvido utilizando Playwright com foco em testes E2E (UI) e API.

O objetivo é demonstrar boas práticas de automação, organização de código, utilização de Page Object Model (POM), geração de massa dinâmica, validação de APIs e geração de evidências automatizadas.

---

## Tecnologias Utilizadas

* Playwright
* JavaScript
* Node.js
* Git
* HTML Reports

---

## Estrutura do Projeto

```text
qa-ecommerce-playwright

├── api
│   ├── products-api.spec.js
│   ├── products-schema.spec.js
│   └── products-performance.spec.js
│
├── docs
│
├── fixtures
│   └── users.json
│
├── pages
│   ├── HomePage.js
│   ├── LoginPage.js
│   ├── SignupPage.js
│   └── AccountInformationPage.js
│
├── tests
│   ├── loginInvalido.spec.js
│   ├── loginValido.spec.js
│   ├── cadastroUsuario.spec.js
│   ├── buscarProduto.spec.js
│   ├── adicionarCarrinho.spec.js
│   └── validarCarrinho.spec.js
│
├── utils
│
└── playwright.config.js
```

---

## Cenários Automatizados

### UI

* CT004 - Login inválido
* CT005 - Cadastro completo de usuário
* CT006 - Login válido
* CT007 - Buscar produto
* CT008 - Adicionar produto ao carrinho
* CT009 - Validar produto no carrinho

### API

* API001 - Listar produtos
* API002 - Validar estrutura da resposta
* API003 - Validar tempo de resposta

---

## Como Executar

Instalar dependências:

```bash
npm install
```

Executar todos os testes:

```bash
npm test
```

Executar apenas testes UI:

```bash
npm run test:ui
```

Executar apenas testes API:

```bash
npm run test:api
```

Abrir relatório:

```bash
npm run report
```

---

## Evidências

O framework está configurado para gerar:

* Screenshots em falhas
* Vídeos em falhas
* Trace Viewer
* Relatórios HTML

---

## Melhorias Aplicadas

* Page Object Model (POM)
* Massa de teste dinâmica
* Persistência de usuários em JSON
* Testes E2E
* Testes de API
* Validação de Performance
* Investigação de comportamento flaky em execução paralela

---

## Autor

Ryan Nóbrega
