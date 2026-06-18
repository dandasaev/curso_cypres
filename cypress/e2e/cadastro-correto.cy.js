describe('pagina de cadastro', () => {
  it('Preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a', 'Cadastrar').click();
    cy.get('[data-test="input-name"]').type('Joao da Silva');
    cy.get('[data-test="input-email"]').type('Joao.da.Silva@email.com');
    cy.get('[data-test="input-password"]').type('Senha123456');
    cy.get('[data-test="input-confirm-password"]').type('Senha123456');
    cy.get('[data-test="submit-button"]').click();
  })

    it('deve carregar a página corretamente e clicar no botão ‘Ver pets disponíveis para adoção', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('.button').click();
  })

    it("Visita a página de principal do AdoPet e testa os botão de home", ()=>{
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('.header__home').click()  

    })

        it("Visita a página de /login do Adopet", ()=>{
        cy.visit('https://adopet-frontend-cypress.vercel.app/login');
    })

        it("Visita a página de /home do Adopet", ()=>{
        cy.visit('https://adopet-frontend-cypress.vercel.app/home');
    })

        it("Visita a página de /home do Adopet", ()=>{
        cy.visit('https://adopet-frontend-cypress.vercel.app/home');
        cy.get('.header__message').click()
    })



})