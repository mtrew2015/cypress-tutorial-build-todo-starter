import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import Footer from './Footer'
import {saveTodo} from '../lib/service';


export default class TodoApp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentTodo: '',
      todos: []
    }
    this.handleNewTodoChange = this.handleNewTodoChange.bind(this)
    this.handleTodoSubmit = this.handleTodoSubmit.bind(this)
  }

  handleNewTodoChange (e) {
    this.setState({currentTodo: e.target.value})
  }

  handleTodoSubmit(e){
    e.preventDefault()
    const newTodo = {name: this.state.currentTodo, isComplete: false }
    console.log(saveTodo(newTodo))

  }
  render () {
    return (
      <Router>
        <div>
          <header className="header">
            <h1>todos</h1>
            <TodoForm handleTodoSubmit={this.handleTodoSubmit} handleNewTodoChange={this.handleNewTodoChange} currentTodo={this.state.currentTodo} />
          </header>
          <section className="main">
            <TodoList  todos={this.state.todos} />
          </section>
          <Footer />
        </div>
      </Router>
    )
  }
}
