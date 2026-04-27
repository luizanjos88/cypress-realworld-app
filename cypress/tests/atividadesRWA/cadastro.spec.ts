import { faker } from "@faker-js/faker";
import CadastroPage from "../../pages/cadastroPage";

const cadastro = new CadastroPage

beforeEach(() => { cy.visit('http://localhost:3000'); });

describe('Registro de novo usuário com sucesso', () => {
    it('Deve registrar um novo usuário com informações válidas', () => {

        const password = faker.internet.password();

        cadastro.cadastroSucess(faker.name.firstName(), faker.name.lastName(), faker.internet.userName(), password, password)

    })


    describe('Tentar registrar um novo usuário com informações incompletas', () => {
        it('Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias', () => {

            cadastro.cadastroFail()

        });
    });
});

