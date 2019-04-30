import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../src/App';
import { mount, render, shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { wrap } from 'module';

configure({ adapter: new Adapter() });

it('Application should render without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('The `name` property in state should update when typing in the `.name-input` input', () => {
    const wrapper = mount(<App />);
    const input = wrapper.find('.name-input')
    const value = "SOMENAME"

    input.instance().value = value
    input.simulate('change')
    
    expect(wrapper.instance().state.name).toEqual(value);
});

it('The `age` property in state should update when typing in the `.age-input` input', () => {
    const wrapper = mount(<App />);
    const input = wrapper.find('.age-input')
    const value = "14"

    input.instance().value = value
    input.simulate('change')
    
    expect(wrapper.instance().state.age).toEqual(value);
});

it('The `value` inside of `.name-input` should change when `name` is changed in state', () => {
    const wrapper = mount(<App />)
    const input = wrapper.find('.name-input')
    const newName = 'Lucius'

    wrapper.setState({name: newName})
    expect(input.instance().value).toEqual(newName)
})

it('The `value` inside of `.age-input` should change when `age` is changed in state', () => {
    const wrapper = mount(<App />)
    const input = wrapper.find('.age-input')
    const newAge = '42'

    wrapper.setState({age: newAge})
    expect(input.instance().value).toEqual(newAge)
})

it('Should alert when button is clicked', () => {
    const wrapper = mount(<App />);
    global.alert = jest.fn();
    wrapper.find('button').simulate('click');
    expect(global.alert).toHaveBeenCalled();
});