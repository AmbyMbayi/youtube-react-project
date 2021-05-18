import React from 'react';
import { shallow } from 'enzyme';
import SidebarFooter from '../SidebarFooter';

test('renders SidebarFooter', () => {
	const wrapper = shallow(<SidebarFooter />);
	expect(wrapper).toMatchSnapshot();
});
