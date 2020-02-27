describe('input form', () => {
	beforeEach(() => {
		cy.visit('/');
	});
	it('focuses input on load', () => {
		cy.focused().should('have.class', 'new-todo');
	});

	it('accepts input', () => {
		cy.get('.new-todo').type('Buy Milk').should('have.value', 'Buy Milk');
	});
});
