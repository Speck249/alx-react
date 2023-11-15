// configures Enzyme, a JavaScript testing utility for React,
// and ensure compatibility of Enzyme's API and functionality
// and run them against React components in React version 16.
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
