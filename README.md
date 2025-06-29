# 🎲 API – Números da Sorte

Uma API REST super-leve em **Node.js + Express** que gera combinações aleatórias de seis números entre **1** e **60** – perfeito para sorteios no estilo **Mega-Sena**, testes de front-end ou qualquer projeto que precise de números aleatórios sem repetições.

> A aplicação possui menos de 50 linhas de código, inicia em milissegundos e pode ser hospedada gratuitamente em serviços como Render, Fly.io ou Railway. :contentReference[oaicite:0]{index=0}

---

## ✨ Funcionalidades

| Rota | Método | Descrição |
|------|--------|-----------|
| `/` | **GET** | Mensagem de boas-vindas com instrução de uso |
| `/random` | **GET** | Retorna um array de **6** números únicos ordenados de forma crescente entre 1 e 60 |

Resposta JSON de exemplo:

```json
{
  "message": [7, 12, 23, 31, 44, 58]
}
```
---

## 🧩 Tecnologias Utilizadas

Este projeto foi construído com foco em leveza, simplicidade e velocidade de execução, utilizando as seguintes tecnologias:

## ⚙️ Back-end

- **[Node.js](https://nodejs.org/)**  
  Plataforma de execução de código JavaScript no lado do servidor. Utilizada para criar uma API leve e rápida.

- **[Express.js](https://expressjs.com/)**  
  Framework minimalista e flexível para Node.js, responsável pelo roteamento e controle das requisições HTTP.

- **[CORS](https://www.npmjs.com/package/cors)**  
  Middleware que permite o compartilhamento de recursos entre diferentes origens, essencial para consumo da API por front-ends externos.

## 💡 Extras

- **JavaScript moderno (ES6+)**  
  Utilização de sintaxe atualizada e concisa, como arrow functions, `let/const`, e desestruturação.

- **Suporte a Docker (opcional)**  
  Possui `Dockerfile` para facilitar deploys em ambientes isolados e serviços como Render, Railway, Fly.io e afins.

## 📦 Dependências do projeto

Trecho do `package.json`:

```json
"dependencies": {
  "cors": "^2.8.5",
  "express": "^4.18.2"
}
```

---

## 🗺️ Roadmap

Aqui estão algumas ideias e melhorias planejadas ou sugeridas para versões futuras da API Números da Sorte:

## 🔧 Melhorias Futuras

- [ ] Suporte a parâmetros de consulta:
  - `qtd` – número de elementos no sorteio (ex: `?qtd=8`)
  - `min` e `max` – intervalo personalizado (ex: `?min=10&max=80`)
- [ ] Endpoint `/health` para verificação de status da API
- [ ] Suporte a logs básicos com `morgan` ou `winston`
- [ ] Conversão do projeto para **TypeScript**
- [ ] Testes unitários com **Jest** ou **Vitest**
- [ ] Publicação de imagem no **Docker Hub**
- [ ] Pipeline CI/CD com **GitHub Actions**
- [ ] Opção de retorno em ordem aleatória (não ordenada)

## 💡 Sugestões?

Abra uma [issue](https://github.com/abechelli/api-numeros-da-sorte/issues) ou envie um [pull request](https://github.com/abechelli/api-numeros-da-sorte/pulls) com sua proposta.

---

# 📜 Licença

Este projeto é distribuído sob a **Licença MIT**.

Você tem permissão para:

- Usar, copiar, modificar e distribuir este software;
- Para fins comerciais ou pessoais;
- Com ou sem alterações;

Desde que:

- O aviso de copyright e a permissão de licença estejam incluídos em todas as cópias.

O software é fornecido "como está", sem garantias de qualquer tipo.

---

# 🚀 Instalação e Execução

Siga os passos abaixo para rodar a API localmente em sua máquina.

## 📦 Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/) (gerenciador de pacotes do Node, já incluído)

---

## 📥 1. Clonar o Repositório

```bash
git clone https://github.com/abechelli/api-numeros-da-sorte.git
cd api-numeros-da-sorte
```

---

## 👥 Integrantes do Projeto

Este projeto foi desenvolvido em equipe pelos seguintes alunos da turma **8AOJR** da **FIAP**:

| Nome                           | RM       |
|--------------------------------|----------|
| Alexandre Stivanatto Bechelli | 358238   |
| Jean Michel Deschamps         | 359921   |
| Oswaldo Gomes Moreira         | 359292   |
| Victor Garcia de Souza        | 359807   |

---

<p align="center">
  Trabalho acadêmico da disciplina de Front-End Engineering - FIAP
</p>
   
