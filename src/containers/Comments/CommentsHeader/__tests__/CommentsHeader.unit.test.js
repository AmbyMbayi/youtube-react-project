import React from 'react';
import { shallow } from 'enzyme';

import CommentsHeader from '../CommentsHeader';

describe('CommentsHeader', () => {
	test('should render properly', () => {
		const wrapper = shallow(<CommentsHeader />);
		expect(wrapper).toMatchSnapshot();
	});
});
