import { SearchPipe } from './search.pipe';

describe('SearchPipe', () => {
  let pipe = new SearchPipe();

  it('create an instance', () => {
    const pipe = new SearchPipe();
    expect(pipe).toBeTruthy();
  });

  it('should expose a transform() method', () => {
    expect(typeof pipe.transform).toEqual('function');
  });

});
