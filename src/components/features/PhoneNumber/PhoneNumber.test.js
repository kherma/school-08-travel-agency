import React from 'react';
import { shallow } from 'enzyme';
import PhoneNumber from './PhoneNumber';

const mockProps = [
  { start: 8, end: 12, name: 'Amanda', phone: '678.243.8455' },
];

describe('Component PhoneNumber', () => {
  it('Should render without crashing', () => {
    const component = shallow(<PhoneNumber phones={mockProps} />);
    expect(component).toBeTruthy();
  });
});
