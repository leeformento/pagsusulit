const helpers = require('./helpers.js')


describe('helpers.js', () => {
  describe('jest', () => {
    test('should run tests', () => {});

it('should run tests using it instead of test', () => {
  // Arrange: set up world
  // Act : execute code testing
  // Assert: check if it works
})
})

describe('multiplyByTen()', () => {
// low hanging fruit
it('should multiply provided number by ten', () => {
  const expected = 100;
  const actual = helpers.multiplyByTen(10);
  // values: actual, matchers (toequal)
  expect(actual).toEqual(expected)
});
});

// ********** STEPS *********
// remember to fail the test first
// think of edge cases ( corner cases
// fix

// ********TDD: Test Driven Design ***** flow:
// Failing test Red > Passing (Green) > Refactor
// BDD: Behavior Driven Design

// test for undefined
it ('should return 0 when called with no value', () => {
  const product = helpers.multiplyByTen();

  expect(product).toBe(0);
});

// BEFORE SHOULD THROW ERR
// it('should return 0 when called with a string', () => {
//   // expect(helpers.multiplyByTen('5')).toBe(0)
//   expect(helpers.multiplyByTen('five')).toBe(0)
// })
// it('should throw error when called with a string', () => {
//   expect(() => { 
//     helpers.multiplyByTen('five');
//   }).toThrow();
// })

describe('toEqual() matcher', () => {
it('should check deep equality', () => {
  const a = { foo:'bar'};
  const b = { foo:'bar'};

  expect(a).toEqual(b);
})
// ASYNC TESTS
describe('async tests', () => {
  it('using a callback', done  => {
    setTimeout(done, 2000)
  });
// PROMISES
  it('using a promises', () => {
    // axios.get().then(res => {
    //   expect(res.data).toWhatever();

    // return new Promise()
    // return helpers.someApiCall()
    return new Promise(resolve => setTimeout(resolve, 250))
  });

// ASYNC/AWAIT
  it('using a async/await', async () => {
    await new Promise (resolve => setTimeout(resolve, 500))

  });

  describe.only('tdd practice', () => {
    it('should return true if called with strings of same length' , () => {
    const str1= 'foo'
    const str2 = 'bar'

    const actual = helpers.areSameLength(str1, str2);

    expect(actual).toBe(true)
  });
  it('should return true if called with strings of different length' , () => {
    expect(helpers.areSameLength('ab', 'a')).toBe(false);
  });
  // undefined as one of args 
  it('', () => {

  })
    // pass a non string
    it('', () => {

    })
})

})
})
})




// test for string
