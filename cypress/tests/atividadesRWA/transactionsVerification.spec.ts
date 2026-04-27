import LoginPage from "../../pages/loginPage";
import TransactionsPage from "../../pages/transactionsPage";
import CadastroPage from "../../pages/cadastroPage";
import { faker } from "@faker-js/faker";
const Chance = require('chance');
const chance = new Chance();

const cadastro = new CadastroPage;
const login = new LoginPage();
const transctions = new TransactionsPage;
const firstName = faker.name.firstName();
const lastName = faker.name.lastName();
const userName = faker.internet.userName();
const password = faker.internet.password();
//número 9 digitos para o campo Routing Number e Account Number
const numero = chance.integer({ min: 100000000, max: 999999999 });



beforeEach(() => { cy.visit('http://localhost:3000') })


describe('Visualizar histórico de transações com sucesso', () => {
    it('Deve exibir o histórico de transações de um usuário corretamente', () => {
        login.loginSucess('Heath93', 's3cret', 'Public');
        transctions.countTranstionWithSucess();

    });
});

describe('Tentar visualizar o histórico de transações sem transações anteriores', () => {
    it('Deve exibir uma mensagem indicando que o usuário não possui transações anteriores', () => {

        cadastro.cadastroSucess(firstName, lastName, userName, password, password)
        login.loginSucess(userName, password, "Public")
        transctions.countNoTransictions('Banco do Brasil', numero, numero)

    });
});