'use strict';

const quiz = [
  {
    question: '現金の実際有高を調べたところ,帳簿残高より100円不足していました。原因を現在調査中です。この時の仕訳は?',
    answers: [
      '仕訳なし',
      '現金100 / 現金過不足100',
      '調査中 / 現金100',
      '現金過不足100 / 現金100'
    ],
    correct: '現金過不足100 / 現金100'
  }, {
    question: '備品300円について,定額法により減価償却を行います。ただし, 残存価額は取得原価の10%, 耐用年数は6年です。この時の仕訳は?',
    answers: [
      '減価償却費50	/	備品減価償却累計額50',
      '減価償却費40	/	備品減価償却累計額40',
      '減価償却費45	/	備品減価償却累計額45',
      '減価償却費40	/	備品40'
    ],
    correct: '減価償却費45	/	備品減価償却累計額45'
  }, {
    question: 'A銀行から現金200円を借り入れ,借用証書を差し入れました。この時の仕訳は?',
    answers: [
      '現金200 / 借入金200',
      '現金200 / 貸付金200',
      'A銀行200 / 借入金200',
      '借入金200 / A銀行200'
    ],
    correct: '現金200 / 借入金200'
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;


const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

// クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();

const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert('正解');
    score++;
  } else {
    window.alert('不正解');
  }

  quizIndex++;
  if (quizIndex < quizLength) {
    // 問題数がまだあればこちらを実行
    setupQuiz();
  } else {
    // 問題が数がもうなければこちらを実行
    window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');

  }

};

//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}
