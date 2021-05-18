import React from 'react';
import { shallow } from 'enzyme';
import VideoGrid from '../VideoGrid';

describe('VideoGrid', () => {
	test('renders without props', () => {
		const wrapper = shallow(<VideoGrid />);
		expect(wrapper).toMatchSnapshot();
	});
	test('renders with title props', () => {
		const wrapper = shallow(<VideoGrid title="trending" />);
		expect(wrapper).toMatchSnapshot();
	});
});
