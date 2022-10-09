const quotes = [
  {
    quote: "Don't dwell on the past.",
    meaning: "(과거에 연연하지 마세요.)",
  },
  {
    quote: "Believe in your self",
    meaning: "(너 자신을 믿으세요.)",
  },
  {
    quote: "Follow your heart.",
    meaning: "(마음가는대로 해라.)",
  },
  {
    quote: "Past in just past.",
    meaning: "(과거는 과거일 뿐인다.)",
  },
  {
    quote: "Love yourself",
    meaning: "(너 자신을 사랑하세요.)",
  },
  {
    quote: "No pain, No gain",
    meaning: "(고통없이 얻는것은 없다.)",
  },
  {
    quote: "No sweat, No sweet",
    meaning: "(땀 없인 달콤함도 없다.)",
  },
  {
    quote: "A friend is a second myself",
    meaning: "(친구는 제2의 자신이다.)",
  },
  {
    quote: "Be brave",
    meaning: "(용감해 지세요.)",
  },
  {
    quote: "Live positive",
    meaning: "(긍정적으로 사세요)",
  },
];

const quote = document.querySelector("#quotes span:first-child");
const meaning = document.querySelector("#quotes span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
meaning.innerText = todayQuote.meaning;
