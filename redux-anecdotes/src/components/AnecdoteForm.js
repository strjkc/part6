import React from 'react'
import {useDispatch} from 'react-redux'
import {createAncedote} from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {
    const dispatch = useDispatch()
    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch(createAncedote(e.target.anecdote.value))
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