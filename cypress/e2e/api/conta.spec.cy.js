/// <reference types="cypress" />

describe('Should test at a API level', () => {
    let token
    before(() => {
        cy.getToken('aline', '123')
            .then(tkn => {
                token = tkn
            })
    })
    beforeEach(() => {
        cy.resetRest()
    })
    it('Should create an account', () => {
        cy.request({
            url: 'https://barrigarest.wcaquino.me/contas',
            method: 'POST',
            headers: { Authorization: `JWT ${token}` },
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
        cy.request({
            method: 'GET',
            url: 'https://barrigarest.wcaquino.me/contas/',
            headers: { Authorization: `JWT ${token}` },
            qs: {
                nome: 'Conta para alterar'
            }
        }).then(res => {
            cy.request({
                url: `https://barrigarest.wcaquino.me/contas/${res.body[0].id}`,
                method: 'PUT',
                headers: { Authorization: `JWT ${token}` },
                body: {
                    nome: 'Conta alterada via rest'
                }
            }).as('response')

            cy.get('@response').its('status').should('be.equal', 200)
        })
    })

    it.only('Should create an existing account', () => {
        cy.request({
            url: 'https://barrigarest.wcaquino.me/contas',
            method: 'POST',
            headers: { Authorization: `JWT ${token}` },
            body: {
                nome: 'Conta para alterar'
            },
            failOnStatusCode: false
        }).as('response')

        cy.get('@response').then(res => {
            expect(res.status).to.be.equal(400)
            expect(res.body.error).to.be.equal('Já existe uma conta com esse nome!')
        })
    })
})
