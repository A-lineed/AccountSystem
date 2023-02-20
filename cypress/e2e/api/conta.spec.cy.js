/// <reference types="cypress" />

describe('Should test at a API level', () => {

    it('Should create an account', () => {
        cy.request({
            method: 'POST',
            url: 'https://barrigarest.wcaquino.me/signin',
            body: {
                email: "linegata_tjs@hotmail.com",
                redirecionar:false,
                senha: "85850219"
            }
        }).its('body.token').should('not.be.empty')
        .then(token => {
            cy.request({
                url: 'https://barrigarest.wcaquino.me/contas',
                method: 'POST',
                headers: {
                    Authorization: `JWT ${token}`
                },
                body: {
                    nome: 'Conta via rest'
                }
            }).as('response')

            cy.get('@response').then(res => {
                expect(res.status).to.be.equal(201)
                expect(res.body).to.have.property('id')
                expect(res.body).to.have.property('nome', 'Conta via rest')
            })
        })

       

        it('Should update an account', () => {

        })

        it('Should create an existing account', () => {


        })
    })

})