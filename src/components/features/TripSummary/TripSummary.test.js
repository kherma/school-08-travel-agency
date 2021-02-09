import React from 'react';
import { shallow } from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('Should render without crashing', () => {
    const component = shallow(
      <TripSummary tags={[]} id="" image="" name="" cost="" days={0} />
    );
    expect(component).toBeTruthy();
  });
  // 19.2.1
  it('Should render link to correct address', () => {
    const expoctedId = 'abc';
    const component = shallow(
      <TripSummary
        id={expoctedId}
        tags={[]}
        image=""
        name=""
        cost=""
        days={0}
      />
    );
    // ==================
    //  Don't know which option is better or if this actually matter...
    const renderedId = component.find('Link').prop('to');
    expect(renderedId).toEqual(`/trip/${expoctedId}`);
    // --vs--
    // const renderedId = component.find('Link').prop('to').substring(6);
    // expect(renderedId).toEqual(expoctedId);
    // ==================
  });
  // 19.2.2
  it('Should render corerct image src and alt', () => {
    const expectedSrc = 'lorem.jpg';
    const expectedAlt = 'lotem ipsum';
    const component = shallow(
      <TripSummary
        tags={[]}
        id=""
        cost=""
        days={0}
        image={expectedSrc}
        name={expectedAlt}
      />
    );
    expect(component.find('img').prop('src')).toEqual(expectedSrc);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
  });
  // 19.2.3
  it('Should render correct name, cost and days', () => {
    const expectedName = 'Sample Name';
    const expectedCost = 'Sample Conse';
    const expectedDays = 123;

    const component = shallow(
      <TripSummary
        tags={[]}
        id=""
        image=""
        name={expectedName}
        cost={expectedCost}
        days={expectedDays}
      />
    );

    expect(component.find('.title').text()).toEqual(expectedName);
    expect(
      component.find('span').map((node) => {
        node.text().includes(String(expectedDays)) ||
          node.text().includes(expectedCost);
      })
    ).toBeTruthy;
  });
  // 19.2.4
  it('Should throw error without required props', () => {
    expect(() => shallow(<TripSummary tags={[]} />)).toThrow();
  });
  // 19.2.5
  it('Should render tags in correct order', () => {
    const expectedTags = ['one', 'two', 'three'];
    const component = shallow(
      <TripSummary
        tags={expectedTags}
        id=""
        cost=""
        days={0}
        image=""
        name=""
      />
    );
    expect(
      component.find('.tag').map((tag, index) => {
        tag.text() === expectedTags[index];
      })
    ).toBeTruthy();
  });
  it('Should not render if tags array is empty or undefined', () => {
    const tagsEmpty = shallow(
      <TripSummary tags={[]} id="" cost="" days={0} image="" name="" />
    );
    const tagsUndefined = shallow(
      <TripSummary id="" cost="" days={0} image="" name="" />
    );
    expect(tagsEmpty.find('.tags').length === 0).toBeTruthy();
    expect(tagsUndefined.find('.tags').length === 0).toBeTruthy();
  });
});
