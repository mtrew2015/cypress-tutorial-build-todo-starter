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
	
	context('Form Submission', () => {
		
		it.only('Adds a new todo on submit', () => {
		cy.server()
		cy.route('POST', '/api/todos', {
			name: 'Buy Eggs', 
			id: 1, 
			isComplete:false
		})
			cy.get('.new-todo')
			.type('Buy Eggs')
			.type('{enter}')
		})
	})

});
