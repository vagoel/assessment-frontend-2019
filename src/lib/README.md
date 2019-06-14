# Approximation of Redux library using myRedux.js

myRedux library provides a <i><b>createStore</b></i> function which takes application <i><b>reducer</b></i> function as an argument and returns a store which has follwing functions :
  
  1. <i><b>getState</b></i> ->  to get the current application state
  2. <i><b>dispatch</b></i> -> to change the current application state by dispatching an action
  3. <i><b>subscribe</b></i> -> to subscribe to the changes and re-render our application with the current state of the app
