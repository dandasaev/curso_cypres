describe('pagina de cadastro', () => {
  it('Preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a', 'Cadastrar').click();
    cy.get('input[name="nome"]').type('Joao da Silva');
    cy.get('input[name="email"]').type('Joao.da.Silva@email.com');
    cy.get('input[name="password"]').type('Senha123456');
    cy.get('input[name="confirm_password"]').type('Senha123456');
    cy.contains('button', 'Cadastrar').click();
  })
})