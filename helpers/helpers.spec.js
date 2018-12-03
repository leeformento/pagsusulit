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

  describe('tdd practice', () => {
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
  it('should return null if one or both arguments is undefined', () => {
    expect(helpers.areSameLength('a')).toBe(null);
    expect(helpers.areSameLength(undefined, 'a')).toBe(null);
  })
    // pass a non string
    it('should return null if called with a non string argument', () => {
      expect(helpers.areSameLength({}, 'a')).toBe(null);
      expect(helpers.areSameLength([], 'a')).toBe(null);
      expect(helpers.areSameLength(false, 'a')).toBe(null);
      expect(helpers.areSameLength('a', {})).toBe(null);
      expect(helpers.areSameLength('a', [])).toBe(null);
      expect(helpers.areSameLength('a', true)).toBe(null);
      expect(helpers.areSameLength(1,3)).toBe(null);
    })
})
describe.only('areEqual', () => {
  it('should return null if x or y are null or undefined', () => {
    expect(helpers.areEqual(null, 'a')).toBe(null);
    expect(helpers.areEqual(10, null)).toBe(null);
    expect(helpers.areEqual(null, 65)).toBe(null);
    expect(helpers.areEqual(undefined, 3)).toBe(null);
  })
  it('should return true if the two provided values are equal', () => {
    const expected = true;
    const numbers = helpers.areEqual(42,42);
    const strings = helpers.areEqual('hey', 'hey');
    const arrays = helpers.areEqual(['hey'], ['hey']);
    const objects = helpers.areEqual({ hey: 1}, {hey: 1});
    const deepObjects = helpers.areEqual(
      {object: { hey: 42} },
      {object: { hey: 42} }
    );
    expect(numbers).toEqual(expected);
    expect(strings).toEqual(expected);
    expect(arrays).toEqual(expected);
    expect(objects).toEqual(expected);
    expect(deepObjects).toEqual(expected);
  })
})
})
})
})

// user stories have scenarios
/*
AS A (role)
I WANT (to do something)
SO THAT (i get some value)
*************************
as a sales executive
i want to log into the system
so that i can see my leads


------------------------------
************** SCENARIO ******
GIVEN
AND
AND
WHEN
AND
THEN
AND
AND
///////////////////////
GIVEN a valid username
AND valid password
WHEN the user hits the login button
THEN the system will log in the user
AND navigate the user to the dashboard.
///////////////////////
GIVEN a valid username
AND invalid password
WHEN the user hits the login button
THEN the system will not log in the user
AND show an error on screen
AND keep the user in the login screen





*/



// test for string
