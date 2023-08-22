const assert = require('assert');
const handlerElephants = require('../src/handlerElephants');

describe('Testes da função handlerElephants', () => {
  describe('Argumentos válidos', () => {
    it('deve retornar a contagem de elefantes', () => {
      const result = handlerElephants('count');
      assert.strictEqual(result, 4);
    });

    it('deve retornar um array com os nomes dos elefantes, incluindo Jefferson', () => {
      const result = handlerElephants('names');
      assert.deepStrictEqual(result, ['Jefferson']);
    });

    it('deve retornar uma idade média próxima de 10.5', () => {
      const result = handlerElephants('averageAge');
      assert.approximately(result, 10.5, 0.1);
    });

    // Adicione mais testes para outros argumentos válidos, se necessário

    it('deve retornar a localização dos elefantes no Zoológico', () => {
      const result = handlerElephants('location');
      assert.strictEqual(result, 'Savannah');
    });

    it('deve retornar a popularidade dos elefantes', () => {
      const result = handlerElephants('popularity');
      assert.strictEqual(result, 'alta');
    });

    it('deve retornar um array com os dias de disponibilidade dos elefantes', () => {
      const result = handlerElephants('availability');
      assert.deepStrictEqual(result, ['Segunda-feira', 'Quarta-feira', 'Sexta-feira']);
    });
  });

  describe('Argumentos inválidos', () => {
    it('deve retornar undefined quando nenhum argumento for fornecido', () => {
      const result = handlerElephants();
      assert.strictEqual(result, undefined);
    });

    it('deve retornar uma mensagem de erro para tipo de parâmetro inválido', () => {
      const result = handlerElephants(123);
      assert.strictEqual(result, 'Parâmetro inválido, é necessário uma string');
    });

    // Adicione mais testes para outros casos de argumentos inválidos, se necessário
  });
});
