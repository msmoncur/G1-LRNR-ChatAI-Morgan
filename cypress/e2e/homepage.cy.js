/// <reference types="cypress" />

describe('Home Page', () => {
    beforeEach(() => {
        cy.visit('https://g1-lrnr-chat-ai.vercel.app/');
    });

    it('loads the home page', () => {
        cy.get('body').should('exist');
    });

    it('contains some text content', () => {
        cy.get('body').should('not.be.empty');
    });


    it('should have a navigation bar', () => {
        cy.get('nav').should('exist');
    });

    it('should have a button', () => {
        cy.get('div').should('contain.text', 'LRNR');
    });

});