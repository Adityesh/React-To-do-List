import React from 'react';
import Form from './components/Form'
import List from './components/List'

import './App.css';

class App extends React.Component {

    state={
        inputValue: "",
        todos: [

        ]
    }
    

handleChange = (event) => {
    this.setState({
      inputValue : event.target.value
    })

}

handleClick = (index) => {
 console.log(index)
 const todos = this.state.todos
 todos[index].done = !todos[index].done
 this.setState({
   todos
 })
} 

onSubmit= (event) => {
  event.preventDefault()
  const newToDo = {
    value : this.state.inputValue,
    done : false
  }

  const todos = this.state.todos
  todos.push(newToDo)
  this.setState({
    todos : todos,
    inputValue:''
    
  })
}

render(){
  return (
    <div className="App">
      <Form inputValue = {this.state.inputValue}
            handleChange = {this.handleChange}
            onSubmit = {this.onSubmit}
              />
      <List 
      todos = {this.state.todos}
      handleClick = {this.handleClick}/>
     
    </div>
  )
}
}
  


export default App
