describe('pagina de login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click();
    })

  it('Deve permitir que um usuário se autentique com credenciais válidas', () => {
    cy.get('[data-test="input-loginEmail"]').type('ana');
    cy.get('[data-test="input-loginPassword"]').type('123');
    cy.get('[data-test="submit-button"]').click();
    cy.contains('Por favor, verifique o email digitado').should('be.visible')
    cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible')
         
       
  });
});
