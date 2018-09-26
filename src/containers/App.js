import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
//robots used in initial construction, later, grabbed link
//import { robots } from './robots';//have to descructure {} name because robots.js does not export as a default
import Scroll from '../components/Scroll';
import './App.css';

//"smart" component has state and usu class syntax
class App extends Component {
	constructor() {
		super()
		this.state = {		//describes state of app - state can change and effect app
			robots: [],//state usually lives in the parent component, which then passes states to it's child components via props
			searchfield: ''
		}
	console.log('constructor');
	}

//confirm that component mounted to page and is rendered:
	componentDidMount() {
		//console.log('check')
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({ robots: users }));
		
		console.log('componentDidMount');
	}

//When ever create own methods on a component, need to use "this/arrow function syntax" (i.e.: = (event) =>) syntax (constructor and render are React elements and don't need it)
	onSearchChange = (event) => { //this is how the child tells the parent (App) that it has changed
		this.setState({ searchfield: event.target.value})//comes with React - anytime need to change state, have to use this.setState()
		//changes state, so the searchfield attribute gets updated and filter robots based on the changed searchfield
		//console.log(event.target.value);//"just something you have to remember" - inspect/will show what you are typing in searchbox
	}

	render() {
		const { robots, searchfield } = this.state;
		const filteredRobots = robots.filter(robot =>{ //this tells the robotsList change in searchbox
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());//will only return the robots that return true to comparison
		})
		console.log('render');//1st time as [], 2nd time as updated [robots]

		/*if (robots.length === 0) {*/ //in case server takes a long time retun user list
		//if statement re-written as ternary, below
		/*	if(!robots.length) {
			return <h1>Loading</h1>
		} else {
		return (
			<div className = 'tc'>
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
					<CardList robots={filteredRobots}/>
				</Scroll>
			</div>
		);			
		}*/
		return !robots.length ?
			<h1>Loading</h1> :
		(
			<div className = 'tc'>
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
					<CardList robots={filteredRobots}/>
				</Scroll>
			</div>
		);			
	}			
}

export default App;