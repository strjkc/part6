import React from 'react'
import {useDispatch} from 'react-redux'
import anecdoteServices from '../services/anecdotes'
import {createAncedote} from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        anecdoteServices.postNew(e.target.anecdote.value)
        .then(data => dispatch(createAncedote(data)))
        e.target.anecdote.value = ''
      }
    return(
        <div>
            <h2>create new</h2>
            <form onSubmit={handleSubmit}>
                <div><input name='anecdote' /></div>
                <button>create</button>
            </form>
        </div>
    )
}

export default AnecdoteForm