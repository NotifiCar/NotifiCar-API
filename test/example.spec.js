const request = require('request')
const chai = require('chai')

const expect = chai.expect
const urlBase = 'http://localhost:5000'

describe('Test NotifiCar API', () => {
    it('Server should be running', () => {
        request.get({ url: urlBase }, (err, res, body) => {
            expect(res.statusCode).to.equal(200)
            expect(body).to.equal('It\'s working')
            done()
        })
    })
})
