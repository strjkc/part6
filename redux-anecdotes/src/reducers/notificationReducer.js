const notificationReducer = (state=null, action) => {
    switch(action.type){
      case 'SHOW_NOTIFICATION':
        return action.data
      case 'HIDE_NOTIFICATION':
        return null
      default: 
        return state
    }
  }
  
  export const createNotification = (content, time) => {
      return async dispatch =>{
        dispatch ({
            type: 'SHOW_NOTIFICATION',
            data: content
          })
        setTimeout(() => dispatch(removeNotification()), time*1000)
      }
  }

  export const removeNotification = () => {
    return {
      type: 'HIDE_NOTIFICATION'
    }
  }

  export default notificationReducer