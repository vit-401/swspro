<?php

/* https://api.telegram.org/bot1627998215:AAHp_j4-zwAQNJ-LyGPCHmRRKLEvoEZG8EE/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$question1 = $_POST['question-1'];
$question2 = $_POST['question-2[]'];
$question3 = $_POST['question-3'];
$question4 = $_POST['question-4'];
$question5 = $_POST['question-5'];
$question6 = $_POST['question-6'];
$question7 = $_POST['question-7'];
$name = $_POST['your-name'];
$token = "1627998215:AAHp_j4-zwAQNJ-LyGPCHmRRKLEvoEZG8EE";
$chat_id = "-578045892";
$arr = array(
  'Вопрос1 ' => $question1,
  'Вопрос2 ' => $question2,
  'Вопрос3 ' => $question3,
  'Вопрос4 ' => $question4,
  'Вопрос5 ' => $question5,
  'Вопрос6 ' => $question6,
  'Вопрос7 ' => $question7,
  'Имя' => $name
);  

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: index.html');
} else {
  echo "Ошибка";
}
?>