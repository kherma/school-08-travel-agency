import React from 'react';
import { shallow } from 'enzyme';
import PhoneNumber from './PhoneNumber';

const mockProps = [
  { start: 8, end: 11, phone: '678.243.8455' },
  { start: 12, end: 15, phone: '278.443.6443' },
  { start: 16, end: 21, phone: '167.280.3970' },
  {
    start: 22,
    end: 8,
    phone: 'The office opens at 8:00 UTC',
  },
];

describe('Component PhoneNumber', () => {
  it('Should render without crashing', () => {
    const component = shallow(<PhoneNumber phones={mockProps} />);
    expect(component).toBeTruthy();
  });
});

const trueDate = Date;
const mockDate = (customDate) =>
  class extends Date {
    constructor() {
      super(customDate);
    }
  };

const checkNumberAtTime = (time, expectedNumber) => {
  it(`should show correct at ${time}`, () => {
    global.Date = mockDate(`2021-02-24T${time}.135Z`);

    const component = shallow(<PhoneNumber phones={mockProps} />);
    const renderedNumber = component.find('span').text();
    expect(renderedNumber).toEqual(expectedNumber);

    global.Date = trueDate;
  });
};

describe('Component HappyHourAd with mocked Date', () => {
  checkNumberAtTime('08:00:00', mockProps[0].phone);
  checkNumberAtTime('11:59:59', mockProps[0].phone);
  checkNumberAtTime('12:00:00', mockProps[1].phone);
  checkNumberAtTime('15:59:59', mockProps[1].phone);
  checkNumberAtTime('16:00:00', mockProps[2].phone);
  checkNumberAtTime('21:59:59', mockProps[2].phone);
  checkNumberAtTime('22:00:00', mockProps[3].phone);
  checkNumberAtTime('07:59:59', mockProps[3].phone);
});
