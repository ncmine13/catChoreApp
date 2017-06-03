import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json'
import InputComponent from '../InputComponent';


test('InputComponent should render as expected', () => {
	const component = shallow(<InputComponent />)
	const tree = toJson(component)
	console.log(tree)
	expect(tree).toMatchSnapshot();
})
//post request should work
//get request should work