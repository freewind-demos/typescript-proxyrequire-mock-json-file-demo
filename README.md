Mocha chai-sinon Demo
=====================

How to use `chai-sinon` to write tests.

The expected parameter is `1234`, and `spy(123)` shows the real one.

```
npm install
npm test
```

`chai-sinon` is better than `chai-spies` is when the parameter passed into 
the mock is not the expected, it will show the real one, like:

```
expected spy to have been called with arguments 1234
    spy(123) at Context.<anonymous> (/Users/twer/workspace/mocha-chai-sinon-demo/spec/test.js:11:5)
```
