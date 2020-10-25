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
  
  export const createNotification = content => {
    return {
      type: 'SHOW_NOTIFICATION',
      data: content
    }
  }

  export const removeNotification = () => {
    return {
      type: 'HIDE_NOTIFICATION'
    }
  }

  export default notificationReducer