const  createId = require('./IdGenerator.js');

describe('createId', () => {
  it('should create an ID of the specified length', () => {
    const id = createId(10);
    expect(id.length).toBe(10);
  });

  it('should use the specified base', () => {
    const id = createId(10, 36);
    expect(id.charAt(0)).toBe('0');
    expect(id.charAt(1)).toBe('a');
  });

  it('should use the specified characters', () => {
    const id = createId(10, 36, 'abcdefghijklmnopqrstuvwxyz');
    expect(id.charAt(0)).toBe('a');
    expect(id.charAt(1)).toBe('b');
  });

  it('should start with the current date', () => {
    const startNum = new Date().valueOf();
    const id = createId(10);
    expect(id.substring(0, 13)).toBe(startNum.toString(36));
  });

  it('should be unique', () => {
    const ids = [];
    for (let i = 0; i < 100; i++) {
      ids.push(createId(10));
    }
    expect(new Set(ids).size).toBe(100);
  });
});
