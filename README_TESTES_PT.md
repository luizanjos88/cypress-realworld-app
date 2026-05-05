# Documentação de Testes - Cypress Real World App (Foco em atividadesRWA)

Este documento fornece uma visão geral da arquitetura de testes automatizados do projeto Cypress Real World App, com foco especial nos testes contidos na pasta `atividadesRWA` e uma menção aos testes de API.

## Estrutura do Projeto de Testes

A estrutura de testes do projeto foi organizada utilizando o Cypress e o padrão Page Objects para facilitar a manutenção e leitura do código. A árvore de diretórios principal relacionada aos testes é:

```text
cypress/
├── fixtures/          # Dados estáticos utilizados nos testes
├── pages/             # Classes de Page Objects (ex: loginPage.ts, cadastroPage.ts)
├── support/           # Comandos customizados e configurações de suporte do Cypress
└── tests/             # Arquivos de testes (specs)
    ├── api/           # Testes focados exclusivamente em rotas de API (ex: api-users.spec.ts)
    ├── atividadesRWA/ # Testes de fluxos principais do usuário (Foco deste documento)
    ├── demo/          # Testes de demonstração
    └── ui/            # Testes de interface do usuário
```

## Testes de API (`cypress/tests/api`)

Os testes de API validam diretamente o backend da aplicação sem a necessidade de uma interface gráfica. Eles garantem que as rotas (como de transações, notificações, comentários, usuários, etc.) estejam respondendo com os status codes corretos (200 OK, 400 Bad Request) e processando as requisições de maneira esperada, além de garantir a segurança dos endpoints.

## Testes na pasta `atividadesRWA`

A pasta `atividadesRWA` concentra os testes End-to-End (E2E) focados nas jornadas críticas dos usuários. Esses testes interagem diretamente com a interface (UI) validando o comportamento da aplicação desde o frontend até a integração com a API. Os cenários estão divididos em 4 arquivos principais:

### 1. `cadastro.spec.ts` (Cadastro de Usuário)
Testa a criação de novas contas utilizando dados dinâmicos gerados pelas bibliotecas utilitárias (ex: Faker).
- **Cenário de Sucesso:** Verifica se é possível registrar um usuário preenchendo todos os campos corretamente (Nome, Sobrenome, Usuário, Senha e Confirmação de Senha).
- **Cenário de Falha:** Tenta registrar um usuário com informações incompletas, validando se as mensagens de erro de validação são exibidas na tela.

### 2. `login.spec.ts` (Autenticação)
Garante que o acesso à plataforma funciona conforme o esperado.
- **Cenário de Sucesso:** Realiza o login com um usuário válido existente (ex: `Heath93`) e verifica o acesso à aplicação.
- **Cenário de Falha:** Tenta realizar o login utilizando credenciais inválidas ou incorretas, esperando que o sistema emita um alerta de erro adequado ("Username or password is invalid").

### 3. `newTransactions.spec.ts` (Novas Transações)
Cobre os fluxos de envio de dinheiro e pagamentos entre usuários.
- **Com Saldo Suficiente:** O usuário efetua o login e envia um valor válido com sucesso.
- **Com Saldo Insuficiente:** Simula uma transação onde o usuário tenta enviar um valor maior que o saldo em conta. O teste valida se o sistema bloqueia a transação e exibe um alerta de erro visível na interface.

### 4. `transactionsVerification.spec.ts` (Verificação de Transações)
Verifica o histórico de movimentações da conta de um usuário.
- **Histórico com Sucesso:** Realiza login em uma conta com histórico existente e valida se as transações aparecem listadas corretamente.
- **Sem Histórico de Transações:** Cria uma nova conta, cadastra uma conta bancária (com validações usando as bibliotecas Faker e Chance) e verifica se o sistema indica de forma correta que aquele usuário ainda não possui transações anteriores.

## Como Executar os Testes

Para rodar os testes localmente, certifique-se de que a aplicação e o backend estejam sendo executados e utilize os comandos abaixo no terminal:

- **Modo Interativo (Cypress UI):**
  ```bash
  yarn cypress open
  # ou
  npm run cypress open
  ```
- **Modo Headless (Terminal, rodando apenas os testes desta pasta):**
  ```bash
  yarn cypress run --spec "cypress/tests/atividadesRWA/*.spec.ts"
  ```
