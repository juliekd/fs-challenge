import { expect, should } from 'chai';
import { mount, render, shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

global.expect = expect;
global.should = should;
global.mount = mount;
global.render = render;
global.shallow = shallow;