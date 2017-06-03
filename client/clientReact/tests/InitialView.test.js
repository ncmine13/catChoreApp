import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json'
import InitialView from '../InitialView';


test('InitialView component should render as expected', () => {
	const component = shallow(<InitialView />)
	const tree = toJson(component)
	expect(tree).toMatchSnapshot();
})

//should only render if there are no entries in the database
