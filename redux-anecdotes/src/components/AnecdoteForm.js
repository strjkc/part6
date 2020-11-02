import React from 'react'
import {connect} from 'react-redux'
import {createAncedote} from '../reducers/anecdoteReducer'

const AnecdoteForm = (props) => {
    const handleSubmit = async (e) => {
        e.preventDefault()
        props.createAncedote(e.target.anecdote.value)
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

const mapDispatchToProps = {
    createAncedote
}

const AnecdoteFormConnected = connect(null,mapDispatchToProps)(AnecdoteForm)

export default AnecdoteFormConnected