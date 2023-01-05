import React from 'react'
import TotalCount from './totalcount'
import { useSelector } from 'react-redux'
import { selectListCount } from '../listSlice'

export default function Home() {
    const count = useSelector(selectListCount)
  return (
    <TotalCount itemsCount={count}/>
  )
}
