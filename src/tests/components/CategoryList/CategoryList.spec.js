import React from 'react'
import ReactShallowRenderer from 'react-test-renderer/shallow'
import CategoryList from '../../../components/CategoryList'

test('should render Header correctly', () => {
  const renderer = new ReactShallowRenderer()

  renderer.render(<CategoryList/>)
  expect(renderer.getRenderOutput()).toMatchSnapshot()
})
