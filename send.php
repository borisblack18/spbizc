<?php

// уведомления о заявке со всех сайтах направлять на msk.credit.group@gmail.com
define('EMAIL', 'msk.credit.group@gmail.com');

print_r($_POST);
$a = array(
	'name' => 'Имя',
	'phone' => 'Телефон',
	'action' => 'Форма',
);

$r = array();
foreach ($_REQUEST as $k => $v)
	if (isset($a[$k]))
		$r[$a[$k]] = $v;

$msg = '';
foreach ($r as $k => $v) {
	$msg .= sprintf("%s: %s\r\n", $k, $v);
}

$subject = 'Заявка (СПИЗЦ)';
$to = EMAIL;

$headers = "MIME-Version: 1.0\r\nContent-type: text/plain; charset=UTF-8\r\n"; 

mail($to, $subject, $msg, $headers);

exit;
