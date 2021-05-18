import React from 'react';
import { shallow } from 'enzyme';
import Subscription from '../Subscription';

describe('Subscription', () => {
	test('renders empty Subscription', () => {
		const wrapper = shallow(<Subscription />);
		expect(wrapper).toMatchSnapshot();
	});
	test('renders Subscription with labels ', () => {
		const wrapper = shallow(<Subscription label="subscriptions" />);
		expect(wrapper).toMatchSnapshot();
	});
});
