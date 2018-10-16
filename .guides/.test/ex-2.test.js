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

it('There should be a `fruit` property in state that is updated when changing selection in the dropdown with the class `option-menu`', () => {
    const wrapper = mount(<App />);
    // get the last fruit option
    let options = wrapper.find('option'); 
    let optionValue = options.at(1).prop('value') || options.at(1).text();
    
    let select = wrapper.find('.option-menu')
    
    select.instance().value = optionValue
    select.simulate('change')
    expect(wrapper.state("fruit")).toEqual(optionValue);
});
