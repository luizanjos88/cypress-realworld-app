import CadastroPage from "../pages/cadastroPage";
import LoginPage from "../pages/loginPage";
import faker from "@faker-js/faker";

const cadastro = new CadastroPage;
const login = new LoginPage;
const firstName = faker.name.firstName();
const lastName = faker.name.lastName();
const userName = faker.internet.userName();
const password = faker.internet.password();


beforeEach(() => cy.visit('http://localhost:3000'));

describe('Tentar visualizar o histórico de transações sem transações anteriores', () => {
    it('Deve exibir uma mensagem indicando que o usuário não possui transações anteriores', () => {
        cadastro.cadastroSucess(firstName, lastName, userName, password, password);
        login.loginSucess(userName, password, 'Public');

        cy.get('[data-test="user-onboarding-next"]').click();
        cy.get('#bankaccount-bankName-input').type('Banco do Brasil');
        cy.get('#bankaccount-routingNumber-input').type('123456789');
        cy.get('#bankaccount-accountNumber-input').type('987654321');
        cy.get('[data-test="bankaccount-submit"]').click();
        cy.get('[data-test="user-onboarding-next"]').click();
        cy.get('[data-test="nav-personal-tab"]').click();
        cy.get('[data-test="empty-list-header"]').should('have.text', 'No Transactions');



    });
});