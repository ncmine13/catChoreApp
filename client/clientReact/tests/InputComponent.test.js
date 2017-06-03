import React from 'react';
import {shallow} from 'enzyme';
import sinon from 'sinon';
import toJson from 'enzyme-to-json'
import InputComponent from '../InputComponent';


describe('The InputComponent', () => {
	test('should render as expected', () => {
		const component = shallow(<InputComponent />)
		const tree = toJson(component)
		expect(tree).toMatchSnapshot();
	});
});


describe('The database', () => {
	test('is empty when it contains no entries', () => {
		const chores = [];
		expect(chores.length).toEqual(0);
	});
});


// test('Request to chores API works', () => {
// 	var server = sinon.fakeServer.create();
// 	server.respondWith('get', '/chores')

// })

//post request should work
//get request should work