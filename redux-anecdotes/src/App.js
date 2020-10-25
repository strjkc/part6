import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {initializeAnecdotes} from './reducers/anecdoteReducer'
import anecdoteServices from './services/anecdotes'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import Filter from './components/Filter'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    anecdoteServices.getAll()
    .then(data => dispatch(initializeAnecdotes(data)))
  },[dispatch])

  return (
    <div>
      <Notification />
      <h2>Anecdotes</h2>
      <Filter />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App