import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json'
import NewComponent from '../NewComponent';


test('NewComponent should render as expected', () => {
	const component = shallow(<NewComponent />)
	const tree = toJson(component)
	console.log(tree)
	expect(tree).toMatchSnapshot();
})

//should render 
//should set state based on entries in input fields
//should send state up to input component when log button is pressed