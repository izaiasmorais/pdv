# PDV

![image](https://github.com/user-attachments/assets/99be07c3-6e86-472b-8ec7-574655c60621)

## Introdução

O melhor PDV para o seu negócio.

<img src="https://img.shields.io/static/v1?label=STATUS&message=DEVELOPING&color=724cff&style=for-the-badge"/> <img src="https://img.shields.io/static/v1?label=NODE&message=V20.18.1&color=724cff&style=for-the-badge"/> <img src="https://img.shields.io/static/v1?label=LICENSE&message=MIT&color=724cff&style=for-the-badge"/>

## Tecnologias

- Linguagem: [TypeScript](https://www.typescriptlang.org/)
- Biblioteca: [ReactJS](https://react.dev/)
- Framework: [Next.js](https://nextjs.org/)
- Componentes: [Shadcn-ui](https://ui.shadcn.com/)
- Conexão com API: [Axios](https://axios-http.com/docs/intro)
- Gerenciamento de estados gloabais: [Zustand](https://zustand-demo.pmnd.rs/)
- Gerenciamento de estados http: [React Query](https://tanstack.com/query/latest/docs/framework/react/overview)
- Gerenciamento de formulários: [React Hook Form](https://www.react-hook-form.com/)
- Validação: [Zod](https://zod.dev/)
- Testes: [Playwirght](https://playwright.dev/)

## Funcionalidades

- [x] Listagem de Produtos
- [ ] Autenticação via Clerk

## Instalação

Clone o repositório:

```bash
git clone https://github.com/izaiasmorais/pdv
cd pdv
```

Instale as dependências:

```bash
pnpm install
```

Configure o arquivo .env com suas credenciais:

```env
ENV=
```

## Executando o Projeto

Inicie o servidor:

```bash
pnpm dev
```

## Executando testes

Executar todos os testes no termial:

```bash
pnpm test
```

Executar todos os testes através da UI do Playwright:

```bash
pnpm play
```
