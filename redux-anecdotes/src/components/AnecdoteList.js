import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {createVote} from '../reducers/anecdoteReducer'
import {createNotification} from '../reducers/notificationReducer'

const AnecdoteList = () => {
    const anecdotes = useSelector(store =>
      store.anecdotes.filter(anec => anec.content.toLowerCase()
                                      .includes(store.filter.toLowerCase()))
      .sort((a,b) => b.votes - a.votes ))
    const dispatch = useDispatch()
    const vote = (id) => {
      const anecdote = anecdotes.find(anec => anec.id === id)
      dispatch(createVote(id))
      dispatch(createNotification(`you voted for '${anecdote.content}'`, 5))
    }
    return(
        <div>
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
        </div>
    )
}

export default AnecdoteList