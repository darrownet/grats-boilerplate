/**
 * @jest-environment node
 */
import 'cross-fetch/polyfill';
import React from 'react';
import Enzyme from 'enzyme';
import { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import App from '../App';

describe('<App />', () => {
  it('should render correctly', () => {
    const component = render(<App compiler='prop:compiler' framework='prop:framework' />);
    expect(component).toBeDefined();
  });
});
