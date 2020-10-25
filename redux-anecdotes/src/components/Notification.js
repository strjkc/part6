import React from 'react'
import {useSelector} from 'react-redux'

const Notification = () => {
  const notification = useSelector(store => store.notification )
  const style = {
    display: notification === null ? 'none' : 'block',
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <div style={style}>
      {`you voted for '${notification}'`}
    </div>
  )
}

export default Notification