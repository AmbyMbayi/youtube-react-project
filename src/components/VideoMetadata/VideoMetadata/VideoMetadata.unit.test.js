import '../VideoMetadata';
import { shallow } from 'enzyme';
import VideoMetadata from '../VideoMetadata';

describe('VideoMetadata', () => {
	test('renders', () => {
		const wrapper = shallow(<VideoMetadata />);
		expect(wrapper).toMatchSnapshot();
	});
});
