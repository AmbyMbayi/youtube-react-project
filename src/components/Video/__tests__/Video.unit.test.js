import React from 'react';
import Video from '../Video';
import { shallow } from 'enzyme';

test('renders video component correctly', () => {
	const wrapper = shallow(<Video id="HAuXJVI_bUs" />);
	expect(wrapper).toMatchSnapshot();
});

test('renders nullif id in video componenent is not specified', () => {
	const wrapper = shallow(<Video />);
	expect(wrapper).toMatchSnapshot();
});
