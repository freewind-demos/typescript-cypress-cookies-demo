function login() {
  cy.visit('/login');
}

describe('Cookies', () => {
  before(() => {
    Cypress.Cookies.debug(true);
    // Notice: if not preserve the cookie 'token',
    // the 2nd test will fail
    Cypress.Cookies.preserveOnce('token');
  });

  before(() => {
    login();
  })

  it('should get cookies correctly', () => {
    cy.getCookie('token').should('have.property', 'value', '123456');
  })

  it('should send existing cookies to server', () => {
    cy.request('/manage')
      .then((res) => res.body)
      .should('have.property', 'token', '123456');
  })
})
