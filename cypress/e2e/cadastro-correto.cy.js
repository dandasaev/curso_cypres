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

    


})