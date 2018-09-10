import {expect} from 'chai'
import sinon from 'sinon'
import * as hello from '../hello'

describe('sinon', function () {
    it('should mock the given function', function () {
        sinon.stub(hello, 'words').callsFake(function (name) {
            return `Hello, ${name} (changed)`
        })
        const value = hello.words('sinon')
        console.log(value)
        expect(value).eq('Hello, sinon (changed)')
    })
})