import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';//have to descructure {} name because robots.js does not export as a default
import './App.css';


class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: robots,
			searchfield: ''
		}
	}

//When ever create own methods on a component, need to use "this" (i.e.: = (event) =>) syntax (constructor and render are React elements and don't need it)
	onSearchChange = (event) => { //this is how the child tells the parent (App) that it has changed
		this.setState({ searchfield: event.target.value})//comes with React - anytime need to change state, have to use this.setState()
		//console.log(event.target.value);//"just something you have to remember" - inspect/will show what you are typing in searchbox
	}

	render() {
		const filteredRobots = this.state.robots.filter(robots =>{ //this tells the robotsList change in searchbox
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());//will only return the robots that return true to comparison
		})

		return (
		<div className = 'tc'>
			<h1 className='f1'>RoboFriends</h1>
			<SearchBox searchChange={this.onSearchChange}/>
			<CardList robots={filteredRobots}/>
		</div>
	);
	}	
}

export default App;