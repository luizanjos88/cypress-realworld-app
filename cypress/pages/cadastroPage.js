class CadastroPage {

    SelectorList() {

        const selectors = {
            botaoCadastro: '[data-test="signup"]',
            firstName: '#firstName',
            lastName: '#lastName',
            username: '#username',
            password: '#password',
            confirmPassword: '#confirmPassword',
            botaoSubmit: '[data-test="signup-submit"]',
            alertError: '[data-test="signup-first-name"]'
        }
        return selectors
    }
    cadastroSucess(firstName, lastName, username, password, confirmPassword) {
        cy.get(this.SelectorList().botaoCadastro).click();
        cy.get(this.SelectorList().firstName).type(firstName);
        cy.get(this.SelectorList().lastName).type(lastName);
        cy.get(this.SelectorList().username).type(username);
        cy.get(this.SelectorList().password).type(password);
        cy.get(this.SelectorList().confirmPassword).type(confirmPassword);
        cy.get(this.SelectorList().botaoSubmit).click();
        cy.location('pathname').should('eq', '/signup');
    }

    cadastroFail() {
        cy.get(this.SelectorList().botaoCadastro).click();
        cy.get(this.SelectorList().botaoSubmit).click();
        cy.get(this.SelectorList().alertError).should('be.visible')
        cy.get(this.SelectorList().alertError).should('contain', 'First Name is required')
    }
}

export default CadastroPage

