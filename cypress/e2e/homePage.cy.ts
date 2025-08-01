describe('Home Page', () => {
    it('should render the home page', () => {
        cy.visit('/travel')
        cy.get('header').should('be.visible')
        cy.get('li').should('have.length', 3)
        cy.contains('li', 'Travel').should('be.visible')
    })

    it('should change the theme in the home page', () => {
        cy.visit('/travel')
        cy.get('svg').click()
        // cy.get('header').should('have.class', 'dark')
        cy.get('data-theme="dark"').should('be.visible')
    })
})