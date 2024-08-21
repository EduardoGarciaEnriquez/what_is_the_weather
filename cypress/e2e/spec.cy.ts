/// <reference types="cypress" />
describe('App', () => {
  it('renders the app', () => {
    cy.visit('/')
  })

  it('toggles the language', () => {
    cy.visit('/')

    cy.get('h1').contains("What's the weather")

    cy.get('label').contains('Enter the name of the city')

    cy.get('.btn').contains('Search')

    cy.get('[type="button"]').click()

    cy.get('h1').contains('Consultar el clima')

    cy.get('label').contains('Ingresa el nombre de una ciudad')

    cy.get('.btn').contains('Buscar')
  })

  describe('when is a valid search', () => {
    it('displays the right data', () => {
      cy.visit('/')

      cy.get('#city').type('New York')

      cy.get('.btn').click()

      cy.get('[data-testid="alert-badge"]').contains(
        /The weather in New York is currently/i
      )
      cy.get('[data-testid="alert-badge"]').contains(/The temperature is/i)
      cy.get('[data-testid="alert-badge"]').contains(/The wind speed is/i)
    })
  })

  describe('when is not a valid search', () => {
    it("displays the 'not a valid input' error", () => {
      cy.visit('/')

      cy.get('#city').type('not a city')

      cy.get('.btn').click()

      cy.get('[data-testid="alert-badge"]').contains(
        /is not a valid input. Try with a different city./i
      )
    })

    it("displays the 'empty input' error", () => {
      cy.visit('/')

      cy.get('.btn').click()

      cy.get('[data-testid="alert-badge"]').contains(
        'Input is empty, try writting a city name.'
      )
    })
  })
})
