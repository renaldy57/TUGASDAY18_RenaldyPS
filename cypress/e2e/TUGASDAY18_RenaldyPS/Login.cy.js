describe('Login', () => {

    it('Login_Positif', () => {
      cy.visit('https://the-internet.herokuapp.com/login')
      cy.wait(3)
      cy.get('#username').type('tomsmith')
      cy.wait(1)
      cy.get('#password').type('SuperSecretPassword!')
      cy.wait(1)
      cy.get('.radius').click()
      cy.wait(3)
      cy.get('#flash').should('be.visible','You logged into a secure area!')
    })

    it('Login_Negatif_WrongUsername', () => {
      cy.visit('https://the-internet.herokuapp.com/login')
      cy.wait(3)
      cy.get('#username').type('super')
      cy.wait(1)
      cy.get('#password').type('SuperSecretPassword!')
      cy.wait(1)
      cy.get('.radius').click()
      cy.wait(3)
      cy.get('#flash').should('be.visible','Your username is invalid!')
    })

    it('Login_Negatif_WrongPassword', () => {
      cy.visit('https://the-internet.herokuapp.com/login')
      cy.wait(3)
      cy.get('#username').type('tomsmith')
      cy.wait(1)
      cy.get('#password').type('justtest')
      cy.wait(1)
      cy.get('.radius').click()
      cy.wait(3)
      cy.get('#flash').should('be.visible','Your password is invalid!')
    })

    it('Login_Negatif_BlankAll', () => {
      cy.visit('https://the-internet.herokuapp.com/login')
      cy.wait(3)
      cy.get('#username').type('{backspace}')
      cy.wait(1)
      cy.get('#password').type('{backspace}')
      cy.wait(1)
      cy.get('.radius').click()
      cy.wait(3)
      cy.get('#flash').should('be.visible','Your username is invalid!')
    })

  })