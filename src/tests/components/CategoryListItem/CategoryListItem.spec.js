import React from 'react'
import ReactShallowRenderer from 'react-test-renderer/shallow'
import CategoryListItem from '../../../components/CategoryListItem'

test('should render Header correctly', () => {
  const renderer = new ReactShallowRenderer()

  renderer.render(<CategoryListItem/>)
  expect(renderer.getRenderOutput()).toMatchSnapshot()
})
