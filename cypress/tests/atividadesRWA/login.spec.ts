import LoginPage from '../../pages/loginPage';

const login = new LoginPage


beforeEach(() => { cy.visit('http://localhost:3000'); });

describe('Login com Sucesso', () => {
  it('Deve fazer login com um usuário válido', () => {
    login.loginSucess('Heath93', 's3cret', 'Public');
  });
});

describe('Tentar fazer login com credenciais inválidas', () => {
  it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
    login.loginFail('luiz', 'Lv1z', 'Username or password is invalid');


  });
});

