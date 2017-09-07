const expect = chai.expect;

describe('index', function() {
  describe('iterativeLog(array)', function() {
    it('logs each element with the format `${index}: ${element}!`', function() {
      //const log = expect.spyOn(console, 'log').andCallThrough()
      var spy = sinon.spy(console, 'log');
      iterativeLog([1, 2, 3])

      expect(spy.called)
      expect(spy.called)
      expect(spy.called)

      spy.restore()
      // expect.restoreSpies()
    })
  })

  // describe('iterate(callback)', function() {
  //   it('calls the callback on an internal array, then returns the array', function() {
  //     // const forEach = expect.spyOn(Array.prototype, 'forEach').andCallThrough()
  //     var spy =  sinon.spy(Array.prototype, 'forEach');
  //     var callback = sinon.spy()
  //
  //     var result = iterate(callback)
  //
  //     // This is a hack to fix the fact that
  //     // this assertion is checked before forEach()
  //     // has been called. Totally unclear why that's
  //     // the case, since forEach *should* be blocking.
  //     setTimeout(() => {
  //       expect(spy).toHaveBeenCalled()
  //     }, 1)
  //     expect(callback.calls.length).toBeGreaterThanOrEqualTo(1)
  //     expect(Array.isArray(result)).toBe(true)
  //   })
  // })

  describe('doToArray(array, callback)', function() {
    it('uses `callback` as the callback for `array`.forEach', function() {
      var array = [1, 2, 3]

      var callback = (x) => (x++)

      doToArray(array, callback)
      debugger
      expect(x).to.be.equal(3)
    })
  })
})
