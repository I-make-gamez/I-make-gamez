let words = [];
let word;
let ogWord;
let correct = 0;
let missed = 0;
let total = 0
let time;
let profanityList = ["slut", "dick", "penis", "vagina", "semen", "sperm"]

$('document').ready(async() => {
    const response = await fetch('https://raw.githubusercontent.com/RazorSh4rk/random-word-api/master/words.json')
    words = await response.json()
});

$('.startButton').click(async () => {
    time = 60*5
    $('.time').text(`${secondsToMinutes(time)}`)
    correct = 0
    $(".correct").text(`Correct Words: ${correct}`)
    missed = 0
    $(".missed").text(`Missed Words: ${missed}`)
    const result = await getWord(words);
    initWord(result)
    playing = true;
    timer();  
})

$(".guessInput").on("keypress", async (event)=>{
  if (event.key === 'Enter') {
    var guess = $('.guessInput').val()
    checkAnswer(guess)
  }
})

$('.guessButton').click(() => {
  var guess = $('.guessInput').val()
  checkAnswer(guess)
})

$('.replayButton').click(() => {
  $('.statsMenu').css({
    visibility: "hidden"
  })
  $('.startMenu').css({
    visibility: "visible"
  })
})

$('.creditsButton').click(() => {
  $('.startMenu').css({
    visibility: "hidden"
  })
  $('.creditsMenu').css({
    visibility: "visible"
  })
})

$('.closeButton').click(() => {
  $('.creditsMenu').css({
    visibility: "hidden"
  })
  $('.startMenu').css({
    visibility: "visible"
  })
})

async function checkAnswer(guess) {
  if (guess.length < ogWord.length) {
    return
  } else {
    total ++;
    if (guess === ogWord) {
      $(".wordLabel").text(ogWord);
      correct += 1
      $(".correct").text(`Correct Words: ${correct}`)
      setTimeout(async () => {
        const result = await getWord(words);
        initWord(result)
      }, 750);
    } else {
      $(".wordLabel").text(ogWord);
      missed += 1
      $(".missed").text(`Missed Words: ${missed}`)
      setTimeout(async() => {
        const result = await getWord(words);
        initWord(result)
      }, 750);
    }
    $('.guessInput').val("")
  }
}

function timer() {
  const timer = setInterval(() => {
    if (time > 0) {
      time -= 1;
      $('.time').text(`${secondsToMinutes(time)}`)
    } else {
      clearInterval(timer)
      if (isNaN(correct/total)) {
        $('.stats').html(`You guessed ${total} words.<br><br>You correctly guessed ${Math.round((correct/(total+1))*100)}% of words.<br><br>You missed ${Math.round((missed/(total+1))*100)}% of words.`)
      } else {
        $('.stats').html(`You guessed ${total} words.<br><br>You correctly guessed ${Math.round((correct/total)*100)}% of words.<br><br>You missed ${Math.round((missed/total)*100)}% of words.`)
      }
      $('.gameMenu').css({
        visibility: "hidden"
      })
      $('.statsMenu').css({
        visibility: "visible"
      })
    }
  }, 1000);
}

function secondsToMinutes(seconds) {
  var minutes = Math.floor(seconds / 60); // Get the whole number of minutes
  var remainingSeconds = seconds % 60; // Get the remaining seconds
  if (remainingSeconds < 10) {
    remainingSeconds = "0" + remainingSeconds
  }
  return minutes + ":" + remainingSeconds;
}

async function getWord(list) {
  var filteredWords = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i].length < 7) {
      filteredWords.push(list[i]);
    }
  }
  var int = getRandomInt(0, filteredWords.length - 1);
  var word = filteredWords[int];
  const response = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
  );
  var def = await response.json();
  if (def.title) {
    return getWord(list);
  } else {
    var definition = def[0].meanings[0].definitions[0].definition;
    for (let i = 0; i < profanityList.length; i++) {
      if(definition.includes(profanityList[i])) {
        return getWord(list);
      }      
    }
    return { word, definition };
  }
}

function initWord(result) {
  word = scrambleizeWord(result.word);
  ogWord = result.word;
  $(".wordLabel").text(word);
  $(".hintLabel").text(`Hint: ${result.definition}`);
  $(".startMenu").css({
    visibility: "hidden",
  });
  $(".gameMenu").css({
    visibility: "visible",
  });
}

function scrambleizeWord(word) {
  var tempWord = word.split("");
  var tempCopy = tempWord.slice();
  var mixedWord = "";
  for (let i = 0; i < tempWord.length; i++) {
    var j = getRandomInt(0, tempCopy.length - 1);
    mixedWord += tempCopy[j];
    tempCopy.splice(j, 1);
  }
  return mixedWord;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
