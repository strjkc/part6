import React from 'react'
import { connect } from 'react-redux'
import {createFilter} from '../reducers/filterRedurcer'
const Filter = (props) => {
  //  const dispatch = useDispatch()
  const handleChange = (event) => {
    props.createFilter(event.target.value)
}
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input value={props.filter} onChange={handleChange} />
    </div>
  )
}

const mapDispatchToProps = {
  createFilter
}

const mapStateToProps = (state) => {
  return {
    filter: state.filter
  }
}

const FilterConnected = connect(mapStateToProps, mapDispatchToProps)(Filter)

export default FilterConnected