import { combineReducers } from "redux"

const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

const anecdoteReducer = (state = initialState, action) => {
  switch (action.type){
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

export const notificationReducer = (state=null, action) => {
  switch(action.type){
    case 'SHOW_NOTIFICATION':
      return action.data
    case 'HIDE_NOTIFICATION':
      return null
    default: 
      return state
  }
}

export const filterReducer = (state='', action) => {
  switch(action.type){
    case 'CHANGE_FILTER':
      return action.data
    default:
      return state
  }
}

const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  notification: notificationReducer,
  filter: filterReducer
})

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

export const createAncedote = content => {
  return {
    type: 'NEW_ANECDOTE',
    data: asObject(content)
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

export const createFilter = content => {
  return {
    type: 'CHANGE_FILTER',
    data: content
  }
}

export default reducer