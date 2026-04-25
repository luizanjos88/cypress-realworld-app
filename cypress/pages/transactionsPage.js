class TransactionsPage {
    selectorList() {
        const selectors = {
            botaoNewTransaction: '[data-test="nav-top-new-transaction"]',
            destinatary: '[data-test="user-list-item-GjWovtg2hr"]',
            amountTransferInput: '[name="amount"]',
            obsTransferInput: '[data-test="transaction-create-form"]',
            submitButton: '[data-test="transaction-create-submit-payment"]',
            alertSucess: '[data-test="alert-bar-success"]',
            botaoHome: '[data-test="sidenav-home"]',
            botaoPersonal: '[data-test="nav-personal-tab"]',
            listaTransacoes: '[data-test="transaction-list"]',
        }
        return selectors
    }
    transcatioSucess(amount, obs) {
        cy.get(this.selectorList().botaoNewTransaction).click();
        cy.get(this.selectorList().destinatary).click();
        cy.get(this.selectorList().amountTransferInput).type(amount);
        cy.get(this.selectorList().obsTransferInput).type(obs);
        cy.get(this.selectorList().submitButton).click();
        cy.get(this.selectorList().alertSucess).should('be.visible');
        cy.get(this.selectorList().alertSucess).contains('Transaction Submitted!');
        //Verificar transação
        cy.get(this.selectorList().botaoHome).click();
        cy.get(this.selectorList().botaoPersonal).click();
        //children busca os itens da lista de Transações e First pega o primeiro item
        cy.get(this.selectorList().listaTransacoes).children().first().should('contain', obs).and('contain', amount);
    }

    transactionFail(amountMaiorQueSaldo, obs) {
        cy.get(this.selectorList().botaoNewTransaction).click();
        cy.get(this.selectorList().botaoNewTransaction).click();
        cy.get(this.selectorList().destinatary).click();
        cy.get(this.selectorList().amountTransferInput).type(amountMaiorQueSaldo);
        cy.get(this.selectorList().obsTransferInput).type(obs);
        cy.get(this.selectorList().submitButton).click();

    }
}
export default TransactionsPage