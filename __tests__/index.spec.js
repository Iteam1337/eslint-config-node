const index = require('../')

it('create config', () => {
  expect(index).toMatchSnapshot()
})
