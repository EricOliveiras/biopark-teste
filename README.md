# Biopark Teste
## Objetivo do projeto
▸ O sistema deve permitir cadastrar
edifícios e apartamentos.

▸ O sistema deve permitir visualizar a
disponibilidade dos apartamentos.

▸ O sistema deve permitir alugar um
apartamento para um locatário.

▸ O sistema deve permitir visualizar o
locatário do apartamento.

▸ Cada apartamento do ecossistema
pertence a um edifício.

▸ Cada apartamento alugado deve
ter um locatário.

▸ Cada apartamento alugado deve
ter o valor de aluguel mensal
cadastrado.
## Utlizando o projeto

### Dependências globais

Você precisa destas dependencias instaladas:

- Node.js LTS v16 ou superior.
- Docker Engine v17.12.0 com Docker Compose v1.24.1 (ou qualquer versão superior)

## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/EricOliveiras/biopark-teste.git
```

### Rodando o projeto

Entre no diretório do projeto:

```bash
  cd biopark-teste
```

Rode o comando:

```bash
  docker-compose up --build -d
```

Acesse: http://localhost:5173

## Stack utilizada

- [Typescript](https://www.typescriptlang.org/)
- [NodeJS](https://nodejs.org/)
- [Prisma](https://www.prisma.io/)
- [ReactJs](https://reactjs.org/)

