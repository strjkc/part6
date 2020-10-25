import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {createFilter} from '../reducers/filterRedurcer'
const Filter = () => {
    const dispatch = useDispatch()
  const handleChange = (event) => {
    dispatch(createFilter(event.target.value))
}
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input value={useSelector(store => store.filter)} onChange={handleChange} />
    </div>
  )
}

export default Filter