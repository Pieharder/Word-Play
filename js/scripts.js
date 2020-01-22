$(document).ready(function () {
  $("#sentence").submit(function (event) {
    event.preventDefault();


    var sentence = $("input#sentence1").val();
    console.log(sentence);


    var words = sentence.split(" ");
    console.log(words);

    var over3 = [];
    words.forEach(function (word) {
      if (word.length >= 3) {
        over3.push(word);
      }
    });
    console.log(over3);

    over3.reverse();
    console.log(over3)

    var results = over3.join(" ")
    alert(results)
  });
});