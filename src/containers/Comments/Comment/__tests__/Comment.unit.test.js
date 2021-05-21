import React from 'react';
import { shallow } from 'enzyme';
import Comment from '../Comment';

describe('Commnent', () => {
	test('renders correctly', () => {
		const wrapper = shallow(<Comment />);
		expect(wrapper).toMatchSnapshot();
	});
});
