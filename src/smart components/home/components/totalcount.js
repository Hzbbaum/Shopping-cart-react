import React from 'react'

export default function TotalCount(props) {
  return (
    <div>סך המוצרים בעגלה הוא: {props.itemsCount??0}</div>
  )
}
