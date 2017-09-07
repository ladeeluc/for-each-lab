const expect = chai.expect;

describe('index', function() {
  describe('iterativeLog(array)', function() {
    it('logs each element with the format `${index}: ${element}!`', function() {
      //const log = expect.spyOn(console, 'log').andCallThrough()
      var spy = sinon.spy(console, 'log');
      iterativeLog([1, 2, 3])

      expect(spy.calledThrice)

      spy.restore()
      // expect.restoreSpies()
    })
  })

  describe('iterate(callback)', function() {
    it('calls the callback on an internal array, then returns the array', function() {

      const result = []
      const callback = function(x) {result.push(x+"s")}

      var spy = sinon.spy(callback)
      iterate(callback)
  
      expect(spy.called)
      expect(result[0]).to.have.string("s")


    })
  })

  describe('doToArray(array, callback)', function() {
    it('uses `callback` as the callback for `array`.forEach', function() {
      var arr = [1, 2, 3]
      var newArr = []
      var testFunction = (x) => {newArr.push(x)}
      var spy = sinon.spy(testFunction)
      doToArray(arr, testFunction)

      var arr2 = ["rooty","tooty","blendy","fruity"]
      var secondTest = (x) => {newArr.push(x)}
      var spy2 = sinon.spy(secondTest)
      doToArray(arr2, secondTest)

      expect(spy2.calledThrice)
      expect(newArr.length).to.eql(7)
      expect(newArr[3]).to.eql("rooty")
    })
  })
})
