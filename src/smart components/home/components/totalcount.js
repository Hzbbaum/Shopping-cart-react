import React from 'react'

export default function TotalCount(props) {
  return (
    <div>Total Items in Cart: {props.itemCount??0}</div>
  )
}
