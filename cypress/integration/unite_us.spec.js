/// <reference types="cypress" />

//const { contains } = require("cypress/types/jquery")

describe('GUI_test', ()=>{
    before(()=>{
        cy.visit('https://nccare360.resources.uniteus.io/')
    })

    it('filte by entity name', ()=>{
        cy.get('#searchInput').type('service')
        cy.get('.pagination-listener-container')
        cy.get('[data-idx="25"]')
        cy.get('[data-id="e56c8584-e75f-447f-b5ee-3373d060fb30"] > .h5').should('contain', 'Adaptive Sports and Adventures Program - CHS Program')
        cy.get('[data-id="e56c8584-e75f-447f-b5ee-3373d060fb30"] > .provider-string > .span').should('contain', 'Adaptive Sports and Adventures Program - CHS')
        cy.get('[data-id="e56c8584-e75f-447f-b5ee-3373d060fb30"] > .container > .services-group')
        cy.get('[data-id="e56c8584-e75f-447f-b5ee-3373d060fb30"] > .container > .services-group > .service-group-name').should('contain', 'Sports & Recreation')
        cy.get('[data-id="e56c8584-e75f-447f-b5ee-3373d060fb30"] > .container > .services-group > :nth-child(2)').should('contain', 'Adaptive Sports')
        cy.get('[data-id="e56c8584-e75f-447f-b5ee-3373d060fb30"] > .container > .services-group > :nth-child(3)').should('contain', 'Outdoor Activities')
        cy.get('[data-id="e56c8584-e75f-447f-b5ee-3373d060fb30"] > .location-container > .location > .location-information').should('contain', '208 East Blvd Charlotte, NC 28203')
    })
})