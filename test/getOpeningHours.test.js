const getOpeningHours = require('../src/getOpeningHours');

const zooClosed = 'The zoo is closed';
const zooOpen = 'The zoo is open';
describe('getOpeningHours', () => {
  it('deve retornar os horários de abertura para cada dia da semana', () => {
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

  it('deve retornar "O zoológico está fechado" para Segunda-feira às 09:00-AM', () => {
    const actual = getOpeningHours('Monday', '09:00-AM');

    expect(actual).toBe(zooClosed);
  });

  it('deve retornar "O zoológico está aberto" para Terça-feira às 09:00-AM', () => {
    const actual = getOpeningHours('Tuesday', '09:00-AM');

    expect(actual).toBe(zooOpen);
  });

  it('deve retornar "O zoológico está fechado" para Quarta-feira às 09:00-PM', () => {
    const actual = getOpeningHours('Wednesday', '09:00-PM');

    expect(actual).toBe(zooClosed);
  });

  it('deve retornar "O zoológico está fechado" para Domingo às 08:00-PM', () => {
    const actual = getOpeningHours('Sunday', '08:00-PM');

    expect(actual).toBe(zooClosed);
  });

  it('deve retornar "O zoológico está fechado" para Sexta-feira às 11:00-AM', () => {
    const actual = getOpeningHours('Friday', '11:00-AM');

    expect(actual).toBe(zooClosed);
  });

  it('deve retornar "O zoológico está fechado" para Sábado às 07:00-PM', () => {
    const actual = getOpeningHours('Saturday', '07:00-PM');

    expect(actual).toBe(zooClosed);
  });

  it('deve lançar um erro para um dia inválido', () => {
    expect(() => getOpeningHours('InvalidDay', '09:00-AM')).toThrowError('The day must be valid. Example: Monday');
  });

  it('deve lançar um erro para um formato de hora inválido', () => {
    expect(() => getOpeningHours('Tuesday', '09:00')).toThrowError('The hour should represent a number');
  });

  it('deve lançar um erro para uma abreviação inválida', () => {
    expect(() => getOpeningHours('Tuesday', '09:00-Invalid')).toThrowError('The abbreviation must be \'AM\' or \'PM\'');
  });

  it('deve lançar um erro para uma hora fora do intervalo válido', () => {
    expect(() => getOpeningHours('Tuesday', '13:00-PM')).toThrowError('The hour must be between 0 and 12');
  });

  it('deve lançar um erro para minutos fora do intervalo válido', () => {
    expect(() => getOpeningHours('Tuesday', '09:60-AM')).toThrowError('The minutes must be between 0 and 59');
  });
});
