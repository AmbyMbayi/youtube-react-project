import React from 'react';
import { shallow } from 'enzyme';
import HorizontalVideoPreview from '../HorizontalVideoPreview';

test('horizontal video renders ', () => {
	const wrapper = shallow(<HorizontalVideoPreview />);
	expect(wrapper).toMatchSnapshot();
});
