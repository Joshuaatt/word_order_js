describe('wordOrder', function() {
  it('takes a one word input and returns that word', function() {
    expect(wordOrder('hello')).to.eql(['hello']);
  });

  it('takes a two word input and returns both words in the order they were submitted', function() {
    expect(wordOrder('hello world')).to.eql(['hello', 'world']);
  });

  it('takes three words, two the same, and returns two words in the order of frequency', function() {
    expect(wordOrder('hello world world'))to.eql('world', 'hello');
  });
});
