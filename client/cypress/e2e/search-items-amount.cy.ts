describe('Searchs', () => {
  it('Search with empty search bar ', () => {
    cy.visit('http://localhost:3000/')

    cy.contains('Inicio');
    cy.get('button[id="searchButton"]').click()
    cy.contains('No hay productos que coincidan con tu búsqueda')
  });

  it('Search with query: "telefono"', () => {
    cy.visit('http://localhost:3000/')

    cy.contains('Inicio');
    cy.get('input[id="searchBarInput"]').type('telefono');
    cy.get('button[id="searchButton"]').click();
    cy.url().should('include', '/items?search=telefono').wait(2000);
  });

  it('Click on results item', () => {
    cy.visit('http://localhost:3000/')

    cy.contains('Inicio');
    cy.get('input[id="searchBarInput"]').type('telefono');
    cy.get('button[id="searchButton"]').click();
    cy.url().should('include', '/items?search=telefono').wait(3000);

    cy.get('a').last().click();
    cy.contains('Comprar');
  });
})

