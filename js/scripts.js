var wordOrder = function(words) {
  var counts = {};
  var word_list = words.split(" ")
  word_list.forEach(function(value) {
    if(!counts[value]) {
      counts[value] = 0;
    }
    counts[value]++;
  });
  return Object.keys(counts).sort(function(curKey, nextKey) {
    return counts[curKey] < counts[nextKey];
  });
};


$(function() {
  $("form#word-order").submit(function(event) {
    var words = $("input#words").val();
    var result = wordOrder(words);

    $(".result").text(result);
    event.preventDefault();
  });
});
