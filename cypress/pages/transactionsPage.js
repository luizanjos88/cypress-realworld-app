class TransactionsPage {
    selectorList() {
        const selectors = {
            buttonNext: '[data-test="user-onboarding-next"]',
            inputBankName: '#bankaccount-bankName-input',
            inputRoutingNumber: '#bankaccount-routingNumber-input',
            inputAccountNumber: '#bankaccount-accountNumber-input',
            buttonSubmit: '[data-test="bankaccount-submit"]',
            nextButton: '[data-test="user-onboarding-next"]',
            mineButton: '[data-test="nav-personal-tab"]',
            mensagemNoTransictions: '[data-test="empty-list-header"]',
            listaTransaction: '[data-test="transaction-list"]',

        }
        return selectors


    }
    countTranstionWithSucess(bankName, routingNumber, accountNumber) {
        cy.get(this.selectorList().mineButton).click();
        cy.get(this.selectorList().listaTransaction).should('have.length.greaterThan', 0);
    }

    countNoTransictions(bankName, routingNumber, accountNumber) {
        cy.get(this.selectorList().buttonNext).click();
        cy.get(this.selectorList().inputBankName).type(bankName);
        cy.get(this.selectorList().inputRoutingNumber).type(routingNumber);
        cy.get(this.selectorList().inputAccountNumber).type(accountNumber);
        cy.get(this.selectorList().buttonSubmit).click();
        cy.get(this.selectorList().nextButton).click();
        cy.get(this.selectorList().mineButton).click();
        cy.get(this.selectorList().mensagemNoTransictions).should('have.text', 'No Transactions');
    }

}

export default TransactionsPage