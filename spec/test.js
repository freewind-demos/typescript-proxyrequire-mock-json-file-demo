import chai from 'chai';
import sinon  from 'sinon';
import sinonChai from 'sinon-chai';

chai.should();
chai.use(sinonChai);

describe('sinon-chai', function () {
  it('should call the mocked function', function () {
    const spy = sinon.spy();
    spy(123);
    spy.should.have.been.calledWith(123);
  });
});