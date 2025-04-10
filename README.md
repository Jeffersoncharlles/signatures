<div align="left">
<h1 style="display: inline-block; vertical-align: middle; margin-top: 0;">SIGNATURES</h1>
</p>
 <p>
	<img src="https://img.shields.io/github/license/Jeffersoncharlles/signatures?style=flat-square&logo=opensourceinitiative&logoColor=white&color=00ff36" alt="license">
	<img src="https://img.shields.io/github/last-commit/Jeffersoncharlles/signatures?style=flat-square&logo=git&logoColor=white&color=00ff36" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/Jeffersoncharlles/signatures?style=flat-square&color=00ff36" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/Jeffersoncharlles/signatures?style=flat-square&color=00ff36" alt="repo-language-count">
	<img src="https://img.shields.io/github/languages/count/Jeffersoncharlles/signatures?style=flat-square&color=00ff36" alt="repo-language-count">
</p>
        <p>Built with the tools and technologies:</p>
        <p>
	<img src="https://img.shields.io/badge/npm-CB3837.svg?style=flat-square&logo=npm&logoColor=white" alt="npm">
	<img src="https://img.shields.io/badge/PostCSS-DD3A0A.svg?style=flat-square&logo=PostCSS&logoColor=white" alt="PostCSS">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat-square&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat-square&logo=React&logoColor=black" alt="React">
	<img src="https://img.shields.io/badge/Docker-2496ED.svg?style=flat-square&logo=Docker&logoColor=white" alt="Docker">
	<img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwindcss">
	<br>
	<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat-square&logo=TypeScript&logoColor=white" alt="TypeScript">
	<img src="https://img.shields.io/badge/Prisma-2D3748.svg?style=flat-square&logo=Prisma&logoColor=white" alt="Prisma">
	<img src="https://img.shields.io/badge/Zod-3E67B1.svg?style=flat-square&logo=Zod&logoColor=white" alt="Zod">
	<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat-square&logo=ESLint&logoColor=white" alt="ESLint">
	<img src="https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel">
	<img src="https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=Cloudflare&logoColor=white" alt="Clouflare">
	<img src="https://img.shields.io/badge/mac%20os-000000?style=for-the-badge&logo=macos&logoColor=F0F0F0" alt="macOS">
</p>
    </div>
</div>
<br clear="left"/>

## Table of Contents

- [ Overview](#-overview)
- [ Features](#-features)
- [ Project Structure](#-project-structure)
  - [ Project Index](#-project-index)
- [ Getting Started](#-getting-started)
  - [ Prerequisites](#-prerequisites)
  - [ Installation](#-installation)
  - [ Usage](#-usage)
- [ License](#-license)
- [ Acknowledgments](#-acknowledgments)

---

TEMPO TOTAL PARA VERSAO 1.0 SO EM CODIGO SEM O TEMPO DE LEITURAS DE DOCUMENTACAO
Projects · signatures
19 hrs 36 mins

## Overview

- O projeto consiste em criar em cadastrar usuario logar e fazer um upload de um pdf para poder fazer a assinatura digital
  voce podendo ver a lista de todos os pdf que foram salvos no banco de dados e excluir e tambem assinar onde tem tambem na lista os status de assinado ou nao

---

## Features

- [✅] cadastrar o usuario com email e senha
- [✅] o cadastro deve confirmar se as duas senhas confere
  - [✅] Resposta que as senhas nao batem
- [✅] Logar o usuario com email e senha cadastrado
  - [x] Logar com OAuth Google
- [✅] Caso o usuario digite algo incorreto deve avisar que as credenciais nao sao validas
  - [✅] Resposta mais atrativa
- [✅] Usario logado redirecionado para pagina de admin
- [✅] Usario faz Logout
- [✅] se o usuario nao tiver logado ele nao tem acesso a pagina
- [✅] fazer upload de um arquivo pdf para assinatura
- [✅] Validar se o arquivo e pdf se nao for nao sobe
- [✅] listar todos os arquivos pdf do usuario em banco de dados
- [✅] Visualizar status do arquivo nome e usuario a que pertence
- [✅ ] Criar a visualizacao do PDF"
- [✅ ] Deletar o PDF"
- [✅ ] Criar a assinatura e mudar o status do pdf
- [✅ ] Criar o registro da assinatura em timestamp
- [✅] Criar a interface da assinatura"

---

## Project Structure

```sh
└── signatures/
    ├── LICENSE
    ├── README.md
    ├── components.json
    ├── docker-compose.yml
    ├── next.config.mjs
    ├── package.json
    ├── pnpm-lock.yaml
    ├── postcss.config.mjs
    ├── prisma
    │   ├── migrations
    │   └── schema.prisma
    ├── src
    │   ├── app
    │   ├── components
    │   ├── env
    │   ├── lib
    │   └── services
    ├── tailwind.config.ts
    └── tsconfig.json
```

---

## PREVIEW ONLINE

## [SIGNATURE ONLINE](https://signatures-chi.vercel.app)

### Project Index

<details> <!-- src Submodule -->
		<summary><b>src</b></summary>
		<blockquote>
			<details>
				<summary><b>lib</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/Jeffersoncharlles/signatures/blob/master/src/lib/utils.ts'>utils.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>env</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/Jeffersoncharlles/signatures/blob/master/src/env/index.ts'>index.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>components</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/Jeffersoncharlles/signatures/blob/master/src/components/logout.tsx'>logout.tsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Jeffersoncharlles/signatures/blob/master/src/components/header.tsx'>header.tsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					</table>
					<details>
						<summary><b>ui</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/Jeffersoncharlles/signatures/blob/master/src/components/ui/label.tsx'>label.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/Jeffersoncharlles/signatures/blob/master/src/components/ui/input.tsx'>input.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/Jeffersoncharlles/signatures/blob/master/src/components/ui/separator.tsx'>separator.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/Jeffersoncharlles/signatures/blob/master/src/components/ui/button.tsx'>button.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/Jeffersoncharlles/signatures/blob/master/src/components/ui/table.tsx'>table.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/Jeffersoncharlles/signatures/blob/master/src/components/ui/dropdown-menu.tsx'>dropdown-menu.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/Jeffersoncharlles/signatures/blob/master/src/components/ui/card.tsx'>card.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
			<details>
				<summary><b>services</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/Jeffersoncharlles/signatures/blob/master/src/services/buckets.ts'>buckets.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Jeffersoncharlles/signatures/blob/master/src/services/auth.ts'>auth.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Jeffersoncharlles/signatures/blob/master/src/services/prisma.ts'>prisma.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>app</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/Jeffersoncharlles/signatures/blob/master/src/app/layout.tsx'>layout.tsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Jeffersoncharlles/signatures/blob/master/src/app/globals.css'>globals.css</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					</table>
					<details>
						<summary><b>(auth)</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/Jeffersoncharlles/signatures/blob/master/src/app/(auth)/layout.tsx'>layout.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
							<details>
								<summary><b>sign-in</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/Jeffersoncharlles/signatures/blob/master/src/app/(auth)/sign-in/page.tsx'>page.tsx</a></b></td>
										<td><code>❯ REPLACE-ME</code></td>
									</tr>
									</table>
								</blockquote>
							</details>
							<details>
								<summary><b>sign-up</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/Jeffersoncharlles/signatures/blob/master/src/app/(auth)/sign-up/page.tsx'>page.tsx</a></b></td>
										<td><code>❯ REPLACE-ME</code></td>
									</tr>
									</table>
								</blockquote>
							</details>
						</blockquote>
					</details>
					<details>
						<summary><b>(docs)</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/Jeffersoncharlles/signatures/blob/master/src/app/(docs)/layout.tsx'>layout.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/Jeffersoncharlles/signatures/blob/master/src/app/(docs)/page.tsx'>page.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
							<details>
								<summary><b>_components</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/Jeffersoncharlles/signatures/blob/master/src/app/(docs)/_components/columns.tsx'>columns.tsx</a></b></td>
										<td><code>❯ REPLACE-ME</code></td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/Jeffersoncharlles/signatures/blob/master/src/app/(docs)/_components/data-table.tsx'>data-table.tsx</a></b></td>
										<td><code>❯ REPLACE-ME</code></td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/Jeffersoncharlles/signatures/blob/master/src/app/(docs)/_components/actions-views.tsx'>actions-views.tsx</a></b></td>
										<td><code>❯ REPLACE-ME</code></td>
									</tr>
									</table>
								</blockquote>
							</details>
						</blockquote>
					</details>
					<details>
						<summary><b>api</b></summary>
						<blockquote>
							<details>
								<summary><b>upload</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/Jeffersoncharlles/signatures/blob/master/src/app/api/upload/route.ts'>route.ts</a></b></td>
										<td><code>❯ REPLACE-ME</code></td>
									</tr>
									</table>
								</blockquote>
							</details>
							<details>
								<summary><b>auth</b></summary>
								<blockquote>
									<details>
										<summary><b>register</b></summary>
										<blockquote>
											<table>
											<tr>
												<td><b><a href='https://github.com/Jeffersoncharlles/signatures/blob/master/src/app/api/auth/register/route.ts'>route.ts</a></b></td>
												<td><code>❯ REPLACE-ME</code></td>
											</tr>
											</table>
										</blockquote>
									</details>
									<details>
										<summary><b>[...nextauth]</b></summary>
										<blockquote>
											<table>
											<tr>
												<td><b><a href='https://github.com/Jeffersoncharlles/signatures/blob/master/src/app/api/auth/[...nextauth]/route.ts'>route.ts</a></b></td>
												<td><code>❯ REPLACE-ME</code></td>
											</tr>
											</table>
										</blockquote>
									</details>
								</blockquote>
							</details>
						</blockquote>
					</details>
				</blockquote>
			</details>
		</blockquote>
	</details>

---

## Getting Started

### Prerequisites

Before getting started with signatures, ensure your runtime environment meets the following requirements:

- **Programming Language:** TypeScript
- **Package Manager:** Npm
- **Container Runtime:** Docker

### Installation

Install signatures using one of the following methods:

**Build from source:**

1. Clone the signatures repository:

```sh
❯ git clone https://github.com/Jeffersoncharlles/signatures
```

2. Navigate to the project directory:

```sh
❯ cd signatures
```

3. Install the project dependencies:

**Using `docker composer - database`** &nbsp; [<img align="center" src="https://img.shields.io/badge/Docker-2CA5E0.svg?style={badge_style}&logo=docker&logoColor=white" />](https://www.docker.com/)

```sh
❯ docker composer -up -d
```

**Using `env`** &nbsp;

```json
❯ renomear .env.sample
❯ .env
 - nao esquecer de configar o R2 CloudFlare para upload

```

**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm install
❯ npx prisma migrate dev

```

### Usage

Run signatures using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm run dev
```

---

## Funcionalidades Esperadas

1. Autenticação

   - Página de login/registro
   - Proteção de rotas privadas
   - Logout
   - Gerenciamento básico de sessão

2. Gerenciamento de Documentos

   - Listagem de documentos do usuário logado
   - Upload de novos documentos (PDF)
   - Visualização de documento
   - Exclusão de documentos

3. Assinatura Digital (Simplificada)

   - Interface para simular assinatura em documento
   - Registro da assinatura com timestamp
   - Status do documento (Pendente, Assinado)

---

## License

This project is protected under the [SELECT-A-LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

## Acknowledgments

- List any resources, contributors, inspiration, etc. here.

---
