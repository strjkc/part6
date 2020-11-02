import React from 'react'
import { connect} from 'react-redux'
import {createVote} from '../reducers/anecdoteReducer'
import {createNotification} from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
  /*  const anecdotes = useSelector(store =>
      store.anecdotes.filter(anec => anec.content.toLowerCase()
                                      .includes(store.filter.toLowerCase()))
      .sort((a,b) => b.votes - a.votes )) */
    
      const vote = (id) => {
      const anecdote = props.anecdotes.find(anec => anec.id === id)
      props.createVote(id)
      props.createNotification(`you voted for '${anecdote.content}'`, 5)
    }
    return(
        <div>
            {props.anecdotes.map(anecdote =>
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

const mapDispatchToProps = {
  createVote,
  createNotification
}

const mapStateToProps = (state) => {
  return{
  anecdotes: (state.anecdotes.filter(anec => anec.content.toLowerCase()
  .includes(state.filter.toLowerCase()))
.sort((a,b) => b.votes - a.votes ))
  }

}



const AnecdoteListConnected = connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)
export default AnecdoteListConnected