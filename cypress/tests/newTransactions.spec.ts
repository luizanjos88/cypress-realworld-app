import LoginPage from "../pages/loginPage";
import NewTransactionsPage from "../pages/newTransactionsPage";


const login = new LoginPage;
const transaction = new NewTransactionsPage;


beforeEach(() => cy.visit('http://localhost:3000'));

describe('Enviar dinheiro com saldo suficiente', () => {
    it('Deve enviar dinheiro com sucesso', () => {

        login.loginSucess('Heath93', 's3cret', 'Public');
        transaction.transcatioSucess('60', 'payment');
    });
});

describe('Enviar dinheiro com saldo insuficiente', () => {
    it('Deve exibir mensagem de erro ao enviar dinheiro sem saldo suficiente', () => {
        login.loginSucess('Heath93', 's3cret', 'Public');
        transaction.transactionFail('2000', 'Valor Maior');
        cy.get('[data-test="alert-bar-error"]').should('be.visible');

    });
})