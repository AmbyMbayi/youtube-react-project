import React from 'react';
import { shallow } from 'enzyme';
import SidebarHeader from '../SidebarHeader';

describe('SidebarHeader', () => {
	test('render empty SidebarItem', () => {
		const wrapper = shallow(<SidebarHeader />);
		expect(wrapper).toMatchSnapshot();
	});
	test('renders sidebarheadings', () => {
		const wrapper = shallow(<SidebarHeader heading="Libray" />);
		expect(wrapper).toMatchSnapshot();
	});
});
