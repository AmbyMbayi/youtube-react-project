import React from 'react';
import { shallow } from 'enzyme';
import SidebarItem from '../SidebarItem';

describe('SidebarItem', () => {
	test('renders empty SidebarItem', () => {
		const wrapper = shallow(<SidebarItem />);
		expect(wrapper).toMatchSnapshot();
	});
	test('renders SidebarItem taht navigates to /feed/trending', () => {
		const wrapper = shallow(<SidebarItem label="trending" />);
		expect(wrapper).toMatchSnapshot();
	});
});
