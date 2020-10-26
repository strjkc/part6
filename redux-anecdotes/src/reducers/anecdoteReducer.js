import anecdoteServices from '../services/anecdotes'

const anecdoteReducer = (state = [], action) => {
  switch (action.type){
    case 'INITIALIZE_ANECDOTES':
      return action.data
    case 'NEW_ANECDOTE':
      return state.concat(action.data)
    case 'INCREMENT_VOTE':
      const id = action.data.id
      const anecdoteToChange = state.find( anec => anec.id === id)
      const updatedAnecdote = {...anecdoteToChange, votes: anecdoteToChange.votes + 1}
      return state.map(anec => anec.id === id ? updatedAnecdote : anec)
    default:
      return state
  }
}

export const createAncedote = content => {
  return async dispatch => {
    const data = await anecdoteServices.postNew(content)
    dispatch ({
      type: 'NEW_ANECDOTE',
      data
    })
  }
}

export  const initializeAnecdotes = content => {
  return {
    type: 'INITIALIZE_ANECDOTES',
    data: content
  }
}
export const createVote = passedId => {
  return {
    type: 'INCREMENT_VOTE',
    data: {
      id: passedId
    }
  }
}



export default anecdoteReducer