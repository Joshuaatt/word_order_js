describe('wordOrder', function() {
  it('takes a one word input and returns that word', function() {
    expect(wordOrder('hello')).to.eql(['hello']);
  });

  it('takes a two word input and returns both words in the order they were submitted', function() {
    expect(wordOrder('hello world')).to.eql(['hello', 'world']);
  });

  it('takes three words, two the same, and returns two words in the order of frequency', function() {
    expect(wordOrder('hello world world')).to.eql(['world', 'hello']);
  });

  it('takes many words and returns them in order of frequency', function() {
    expect(wordOrder('a a b d d d d d d k')).to.eql(['d', 'a', 'b', 'k']);
  });
});
