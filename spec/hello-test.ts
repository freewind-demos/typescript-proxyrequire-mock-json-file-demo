import {expect} from 'chai'

const proxyquire = require('proxyquire')
const hello = proxyquire('../hello', {
    './config.json': {
        userName: 'mock-userName-in-testing'
    }
})

describe('proxyquire', function () {
    it('should replace the config.json dependency used in hello module', function () {
        const value = hello.hello()
        console.log(value)
        expect(value).eq('Hello, mock-userName-in-testing!')
    })
})