import React from 'react'
import { connect } from 'react-redux'
import { store, changeMessage } from '../redux'

export function HelloWorld (props) {
  return (
    <div className='hello-world'>
      <p>Hello world!</p>
      <p> {props.exampleMessage} </p>
    </div>
  )
}

const mapStateToProps = state => ({exampleMessage: state.exampleReducer.message})
const mapDispatchToProps = dispatch => ({changeMessage: txt => dispatch(changeMessage(txt))})
const ConnectedWorld = connect(mapStateToProps, mapDispatchToProps)(HelloWorld)

const App = () => <ConnectedWorld store={store} />

export default App
