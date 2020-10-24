import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {createVote, createAncedote} from './reducers/anecdoteReducer'

const App = () => {
  const anecdotes = useSelector(state => state.sort((a,b) => b.votes - a.votes ))
  const dispatch = useDispatch()

  const vote = (id) => {
    console.log('vote', id)
    dispatch(createVote(id))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(createAncedote(e.target.anecdote.value))
    dispatch(createAncedote(e.target.anecdote.value))
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={handleSubmit}>
        <div><input name='anecdote' /></div>
        <button>create</button>
      </form>
    </div>
  )
}

export default App