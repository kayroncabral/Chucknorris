import React from 'react'
import ReactShallowRenderer from 'react-test-renderer/shallow'
import Loading from '../../../components/Loading'

test('should render Header correctly', () => {
  const renderer = new ReactShallowRenderer()

  renderer.render(<Loading/>)
  expect(renderer.getRenderOutput()).toMatchSnapshot()
})
