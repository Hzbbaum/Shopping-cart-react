import React from 'react'

export default function TotalCount(props) {
  return (
    <div>Total Items in Cart: {props.itemsCount??0}</div>
  )
}
