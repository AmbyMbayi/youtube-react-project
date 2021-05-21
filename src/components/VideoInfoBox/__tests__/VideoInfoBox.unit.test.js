import VideoInfoBox from '../VideoInfoBox';
import { shallow } from 'enzyme';

describe('videoInfoBox', () => {
	test('renders collapse', () => {
		const wrapper = shallow(<VideoInfoBox />);
		expect(wrapper).toMatchSnapshot();
	});
	test('render expanded', () => {
		const wrapper = shallow(<VideoInfoBox />);
		wrapper.setState({ collapsed: false });
		expect(wrapper).toMatchSnapshot();
	});
});
