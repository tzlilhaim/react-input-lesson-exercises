import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/App';
import { mount, render, shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { wrap } from 'module';

configure({ adapter: new Adapter() });

it('Application should render without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Name should be updated in the state when changing it in the input', () => {
    const wrapper = mount(<App />);
    wrapper.find('.name-input').simulate('change', {target: {value: 'SOMENAME'}});
    expect(wrapper.state('name')).toEqual('SOMENAME');
});

it('Age should be updated in the state when changing it in the input', () => {
    const wrapper = mount(<App />);
    wrapper.find('.age-input').simulate('change', { target: { value: '14'}});
    expect(wrapper.state('age')).toEqual('14');
});

it('Should alert when button is clicked', () => {
    const wrapper = mount(<App />);
    global.alert = jest.fn();
    wrapper.find('button').simulate('click');
    expect(global.alert).toHaveBeenCalled();
});