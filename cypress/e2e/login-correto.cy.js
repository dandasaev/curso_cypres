describe('pagina de login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click();
    })

  it('Deve permitir que um usuário se autentique com credenciais válidas', () => {
    cy.get('[data-test="input-loginEmail"]').type('ana@email.com');
    cy.get('[data-test="input-loginPassword"]').type('Senha123');
    cy.get('[data-test="submit-button"]').click();
  });
});
