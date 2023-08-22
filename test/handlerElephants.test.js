const handlerElephants = require('../src/handlerElephants');

describe('Testes da função handlerElephants', () => {
  describe('Valid arguments', () => {
    it('should return the count of elephants', () => {
      const result = handlerElephants('count');
      expect(result).to.equal(4);
    });

    it('should return an array of elephant names including Jefferson', () => {
      const result = handlerElephants('names');
      expect(result).to.include('Jefferson');
    });

    it('should return an average age close to 10.5', () => {
      const result = handlerElephants('averageAge');
      expect(result).to.be.closeTo(10.5, 0.1);
    });

    // Add more tests for other valid arguments as needed

    it('should return the location of the elephants within the Zoo', () => {
      const result = handlerElephants('location');
      expect(result).to.equal('Savannah');
    });

    it('should return the popularity of the elephants', () => {
      const result = handlerElephants('popularity');
      expect(result).to.equal('high');
    });

    it('should return an array of availability days for the elephants', () => {
      const result = handlerElephants('availability');
      expect(result).to.deep.equal(['Monday', 'Wednesday', 'Friday']);
    });
  });
});
