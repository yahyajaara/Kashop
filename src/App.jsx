import React, { Component } from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './router.jsx'

export default class D extends Component {
  render() {
    return (
      <RouterProvider router={router} />
    )
  }
}
