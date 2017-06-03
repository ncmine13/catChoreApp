import React from 'react';
import {shallow} from 'enzyme';
import sinon from 'sinon';
import toJson from 'enzyme-to-json'
import InputComponent from '../InputComponent';


test('InputComponent should render as expected', () => {
	const component = shallow(<InputComponent />)
	const tree = toJson(component)
	console.log(tree)
	expect(tree).toMatchSnapshot();
})

test('Request to chores API works', () => {
	var server = sinon.fakeServer.create();
	server.respondWith('get', '/chores')

})

test('InitialView component only renders when database is empty', () => {
	const chores = [];
	const InitialView = shallow(<InitialView />)
	//expect Initial View to render

})

//post request should work
//get request should work