class LoginPage {

    selectorList() {

        const selectors = {
            usernameField: '[name="username"]',
            passwordField: '[name="password"]',
            submitButton: '[data-test=\"signin-submit\"]',
            paginaPrincipal: '[data-test="main"]',
            alert: '[data-test="signin-error"]'


        }
        return selectors
    }

    loginSucess(username, password, wordVerification) {

        cy.get(this.selectorList().usernameField).type(username);
        cy.get(this.selectorList().passwordField).type(password);
        cy.get(this.selectorList().submitButton).click();
        cy.get(this.selectorList().paginaPrincipal).contains(wordVerification);
    }

    loginFail(username, password, mensagemErro) {

        cy.get(this.selectorList().usernameField).type(username);
        cy.get(this.selectorList().passwordField).type(password);
        cy.get(this.selectorList().submitButton).click();
        cy.get(this.selectorList().alert).contains(mensagemErro);

    }
}

export default LoginPage