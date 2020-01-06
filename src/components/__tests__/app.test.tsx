/**
 * @jest-environment node
 */
import React from 'react';
import Enzyme from 'enzyme';
import { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import App from '../app';

describe('<App />', () => {
  it('should render correctly', () => {
    const component = render(<App compiler='prop:compiler' framework='prop:framework' />);
    expect(component).toMatchSnapshot();
  });
});