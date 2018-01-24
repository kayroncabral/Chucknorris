import React from 'react'
import ReactShallowRenderer from 'react-test-renderer/shallow'
import NotFound from '../../../components/NotFound'

test('should render Header correctly', () => {
  const renderer = new ReactShallowRenderer()

  renderer.render(<NotFound/>)
  expect(renderer.getRenderOutput()).toMatchSnapshot()
})
