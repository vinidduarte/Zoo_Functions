const expect = require('expect');
const getOpeningHours = require('../src/getOpeningHours');

describe('getOpeningHours', () => {
  const zooClosed = 'The zoo is closed';
  const zooOpen = 'The zoo is open';

  it('deve retornar os horários de funcionamento para cada dia da semana', () => {
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    const actual = getOpeningHours();
    expect(actual).toEqual(expected);
  });

  it('should return "The zoo is closed" for Monday at 09:00-AM', () => {
    const actual = getOpeningHours('Monday', '09:00-AM');
    expect(actual).toBe(zooClosed);
  });

  it('should return "The zoo is open" for Tuesday at 09:00-AM', () => {
    const actual = getOpeningHours('Tuesday', '09:00-AM');
    expect(actual).toBe(zooOpen);
  });

  it('should return "The zoo is closed" for Wednesday at 09:00-PM', () => {
    const actual = getOpeningHours('Wednesday', '09:00-PM');
    expect(actual).toBe(zooClosed);
  });

  it('should return "The zoo is closed" for Sunday at 08:00-PM', () => {
    const actual = getOpeningHours('Sunday', '08:00-PM');
    expect(actual).toBe(zooClosed);
  });

  it('should return "The zoo is closed" for Friday at 11:00-AM', () => {
    const actual = getOpeningHours('Friday', '11:00-AM');
    expect(actual).toBe(zooClosed);
  });

  it('should return "The zoo is closed" for Saturday at 07:00-PM', () => {
    const actual = getOpeningHours('Saturday', '07:00-PM');
    expect(actual).toBe(zooClosed);
  });

  it('should throw an error for an invalid day', () => {
    expect(() => getOpeningHours('InvalidDay', '09:00-AM')).toThrowError('The day must be valid. Example: Monday');
  });

  it('should throw an error for an invalid hour format', () => {
    expect(() => getOpeningHours('Tuesday', '09:00')).toThrowError('The hour should represent a number');
  });

  it('should throw an error for an invalid abbreviation', () => {
    expect(() => getOpeningHours('Tuesday', '09:00-Invalid')).toThrowError('The abbreviation must be \'AM\' or \'PM\'');
  });

  it('should throw an error for an hour outside of the valid range', () => {
    expect(() => getOpeningHours('Tuesday', '13:00-PM')).toThrowError('The hour must be between 0 and 12');
  });

  it('should throw an error for minutes outside of the valid range', () => {
    expect(() => getOpeningHours('Tuesday', '09:60-AM')).toThrowError('The minutes must be between 0 and 59');
  });
});
