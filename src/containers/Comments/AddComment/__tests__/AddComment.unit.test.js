import React from 'react';
import { shallow } from 'enzyme';
import AddComment from '../AddComment';

describe('AddComments', () => {
	test('renders correctly', () => {
		const wrapper = shallow(<AddComment />);
		expect(wrapper).toMatchSnapshot();
	});
});
