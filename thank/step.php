<?php

// уведомления со всех страницы сайтов thanks направлять на express-kredit24@yandex.ru
define('EMAIL', 'express-kredit24@yandex.ru');

$a = array(
	'step' => 'Шаг',
	'geo' => 'Гео',
	'obj' => 'Объект недвижимости',
	'amount' => 'Сумма',
	'children' => 'Наличие прописанных н.л',
	'rooms' => 'Скольки комнатная квартира',
	'square' => 'Метраж комнаты',
	'source' => 'Как вам досталась недвижимость?',
);

$r = array('Сайт' => $_SERVER['SERVER_NAME']);
foreach ($_REQUEST as $k => $v)
	if (isset($a[$k]))
		$r[$a[$k]] = $v;

$msg = '';
foreach ($r as $k => $v) {
	$msg .= sprintf("%s: %s\r\n", $k, $v);
}

$subject = 'Добытчик ' . $_SERVER['SERVER_NAME'];
$to = EMAIL;

$headers = "MIME-Version: 1.0\r\nContent-type: text/plain; charset=UTF-8\r\n"; 

mail($to, $subject, $msg, $headers);

exit;
