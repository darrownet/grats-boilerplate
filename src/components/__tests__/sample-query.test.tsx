/**
 * @jest-environment node
 */
import 'jsdom-global/register';
import React from 'react';
import Enzyme from 'enzyme';
import { render, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});
import {MockedProvider} from '@apollo/react-testing';

import {SAMPLE_QUERY} from "../../graphql/queries";
import SampleQuery from "../sample-query";

const wait = require('waait');

describe('The <SampleQuery /> component', () => {

  const mock = [
    {
      request: {
        query: SAMPLE_QUERY
      },
      result: {
        data: {
          feed: {
            links: [
              {id: "1a", url: "apple.com", description: "website for apple", __typename: "Link"},
              {id: "2b", url: "cnbc.com", description: "website for cnbc", __typename: "Link"},
              {id: "3c", url: "symbiont.io", description: "website for symbiont", __typename: "Link"}
            ]
          }
        }
      }
    }
  ];

  it('should exist', () => {
    const component = shallow(
      <MockedProvider mocks={[]}>
        <SampleQuery/>
      </MockedProvider>
    );
    expect(component).toBeDefined();
  });

  it('should render the correct loading view', async () => {
    const component = mount(
      <MockedProvider mocks={[]}>
        <SampleQuery/>
      </MockedProvider>
    );
    const loading = component.find('p');
    expect(loading.text()).toEqual('Loading...');
  });

  it('should display 3 information links based on the query result', async () => {
    const component = mount(
      <MockedProvider mocks={mock} addTypename={false}>
        <SampleQuery />
      </MockedProvider>
    );
    await wait(0);
    component.update();
    const links = component.find('li');
    expect(links.length).toEqual(3);
  });


});