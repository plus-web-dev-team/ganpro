<?php header("Content-Type:text/html;charset=utf-8"); ?>
<?php
if (version_compare(PHP_VERSION, '5.1.0', '>=')) {
	date_default_timezone_set('Asia/Tokyo');
}

$site_top = "https://plus-agc.sakura.ne.jp/plus-demo/ganpro/";

$to = "yamauchi-t@plus-agc.com";

$from = "yamauchi-t@plus-agc.com";

$Email = "Email";

$Referer_check = 1;

$Referer_check_domain = "plus-agc.sakura.ne.jp";

$useToken = 1;

$BccMail = "";

$subject = "ホームページのお問い合わせ";

$confirmDsp = 1;

$jumpPage = 0;

$thanksPage = "http://xxx.xxxxxxxxx/thanks.html";

$requireCheck = 1;

$require = array('お名前', '電話番号', 'Email', 'お問い合わせ内容');


$remail = 1;

$refrom_name = "東北広域次世代がんプロ養成プラン 弘前大学事務局";

$re_subject = "送信ありがとうございました";

$dsp_name = 'お名前';

$remail_text = <<< TEXT

お問い合わせありがとうございました。
早急にご返信致しますので今しばらくお待ちください。

送信内容は以下になります。

TEXT;

$mailFooterDsp = 1;

$mailSignature = <<< FOOTER

──────────────────────
〒036-8562 青森県弘前市在府町5番地
弘前大学医学研究科
TEL：0172-39-5410
FAX：0172-39-5209
メール：ganpro@hirosaki-u.ac.jp
──────────────────────

FOOTER;


$hankaku_array = array('電話番号', '金額');

$use_envelope = 0;

$replaceStr['before'] = array('①', '②', '③', '④', '⑤', '⑥', '⑦', '⑧', '⑨', '⑩', '№', '㈲', '㈱', '髙');

$replaceStr['after'] = array('(1)', '(2)', '(3)', '(4)', '(5)', '(6)', '(7)', '(8)', '(9)', '(10)', 'No.', '（有）', '（株）', '高');

if ($useToken == 1 && $confirmDsp == 1) {
	session_name('PHPMAILFORMSYSTEM');
	session_start();
}
$encode = "UTF-8";
if (isset($_GET)) $_GET = sanitize($_GET);
if (isset($_POST)) $_POST = sanitize($_POST);
if (isset($_COOKIE)) $_COOKIE = sanitize($_COOKIE);
if ($encode == 'SJIS') $_POST = sjisReplace($_POST, $encode);
$funcRefererCheck = refererCheck($Referer_check, $Referer_check_domain);

$sendmail = 0;
$empty_flag = 0;
$post_mail = '';
$errm = '';
$header = '';

if ($requireCheck == 1) {
	$requireResArray = requireCheck($require);
	$errm = $requireResArray['errm'];
	$empty_flag = $requireResArray['empty_flag'];
}

if (empty($errm)) {
	foreach ($_POST as $key => $val) {
		if ($val == "confirm_submit") $sendmail = 1;
		if ($key == $Email) $post_mail = h($val);
		if ($key == $Email && $mail_check == 1 && !empty($val)) {
			if (!checkMail($val)) {
				$errm .= "<p class=\"error_messe\">【" . $key . "】はメールアドレスの形式が正しくありません。</p>\n";
				$empty_flag = 1;
			}
		}
	}
}

if (($confirmDsp == 0 || $sendmail == 1) && $empty_flag != 1) {

	if ($useToken == 1 && $confirmDsp == 1) {
		if (empty($_SESSION['mailform_token']) || ($_SESSION['mailform_token'] !== $_POST['mailform_token'])) {
			exit('ページ遷移が不正です');
		}
		if (isset($_SESSION['mailform_token'])) unset($_SESSION['mailform_token']);
		if (isset($_POST['mailform_token'])) unset($_POST['mailform_token']);
	}

	if ($remail == 1) {
		$userBody = mailToUser($_POST, $dsp_name, $remail_text, $mailFooterDsp, $mailSignature, $encode);
		$reheader = userHeader($refrom_name, $from, $encode);
		$re_subject = "=?iso-2022-jp?B?" . base64_encode(mb_convert_encoding($re_subject, "JIS", $encode)) . "?=";
	}
	$adminBody = mailToAdmin($_POST, $subject, $mailFooterDsp, $mailSignature, $encode, $confirmDsp);
	$header = adminHeader($post_mail, $BccMail);
	$subject = "=?iso-2022-jp?B?" . base64_encode(mb_convert_encoding($subject, "JIS", $encode)) . "?=";

	if ($use_envelope == 0) {
		mail($to, $subject, $adminBody, $header);
		if ($remail == 1 && !empty($post_mail)) mail($post_mail, $re_subject, $userBody, $reheader);
	} else {
		mail($to, $subject, $adminBody, $header, '-f' . $from);
		if ($remail == 1 && !empty($post_mail)) mail($post_mail, $re_subject, $userBody, $reheader, '-f' . $from);
	}
} else if ($confirmDsp == 1) {

?>
	<!DOCTYPE html>
	<html lang="ja">

	<head>
		<meta charset="UTF-8">
		<meta name="description" content="">
		<meta name="viewport" content="width=device-width">
		<link rel="icon" type="image/svg+xml" href="./favicon.svg">
		<meta name="generator" content="Astro v4.1.3">
		<title>確認画面 | 弘前大学がんプロ</title>
		<link rel="preconnect" href="https://fonts.googleapis.com">
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
		<link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@100;300;400;500;700;800;900&display=swap" rel="stylesheet">
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css">
		<link rel="stylesheet" href="./_astro/index.esX3SBa9.css" />
		<link rel="stylesheet" href="./_astro/about.bW8MHZY5.css" />
		<style>
			@charset "UTF-8";

			.swiper-button-prev[data-astro-cid-wfe7xcno],
			.swiper-button-next[data-astro-cid-wfe7xcno] {
				height: 50px;
				width: 50px
			}

			.swiper-button-prev[data-astro-cid-wfe7xcno]:after,
			.swiper-button-next[data-astro-cid-wfe7xcno]:after {
				background-repeat: no-repeat;
				background-size: contain;
				content: "";
				height: 50px;
				margin: auto;
				width: 50px
			}

			.swiper-button-prev[data-astro-cid-wfe7xcno]:after {
				background-image: url(../images/prev.svg)
			}

			.swiper-button-next[data-astro-cid-wfe7xcno]:after {
				background-image: url(../images/next.svg)
			}

			.swiper-slide[data-astro-cid-wfe7xcno] img[data-astro-cid-wfe7xcno] {
				height: auto;
				width: 100%
			}
		</style>
		<link rel="stylesheet" href="./_astro/cource-1.3PSeZfHN.css" />
	</head>

	<body>


		<div id="formWrap">
			<?php if ($empty_flag == 1) { ?>
				<div style="text-align:center;">
					<h4>入力にエラーがあります。下記をご確認の上「戻る」ボタンにて修正をお願い致します。</h4>
					<?php echo $errm; ?><br /><br /><input type="button" value=" 前画面に戻る " onClick="history.back()">
				</div>
			<?php } else { ?>
				<h3 style="text-align:center;">確認画面</h3>
				<p style="text-align:center;">以下の内容で間違いがなければ、「送信する」ボタンを押してください。</p>
				<form style="width:fit-content;margin:0 auto;" action="<?php echo h($_SERVER['SCRIPT_NAME']); ?>" method="POST">
					<table class="formTable">
						<?php echo confirmOutput($_POST);
						?>
					</table>
					<p style="text-align:center;"><input type="hidden" name="mail_set" value="confirm_submit">
						<input type="hidden" name="httpReferer" value="<?php echo h($_SERVER['HTTP_REFERER']); ?>">
						<input type="submit" value="　送信する　">
						<input type="button" value="前画面に戻る" onClick="history.back()">
					</p>
				</form>
			<?php } ?>
		</div>
	</body>

	</html>
<?php

}

if (($jumpPage == 0 && $sendmail == 1) || ($jumpPage == 0 && ($confirmDsp == 0 && $sendmail == 0))) {

?>
	<!DOCTYPE html>
	<html lang="ja">

	<head>
		<meta charset="UTF-8">
		<meta name="description" content="">
		<meta name="viewport" content="width=device-width">
		<link rel="icon" type="image/svg+xml" href="./favicon.svg">
		<meta name="generator" content="Astro v4.1.3">
		<title>送信完了 | 弘前大学がんプロ</title>
		<link rel="preconnect" href="https://fonts.googleapis.com">
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
		<link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@100;300;400;500;700;800;900&display=swap" rel="stylesheet">
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css">
		<link rel="stylesheet" href="./_astro/index.esX3SBa9.css" />
		<link rel="stylesheet" href="./_astro/about.bW8MHZY5.css" />
		<style>
			@charset "UTF-8";

			.swiper-button-prev[data-astro-cid-wfe7xcno],
			.swiper-button-next[data-astro-cid-wfe7xcno] {
				height: 50px;
				width: 50px
			}

			.swiper-button-prev[data-astro-cid-wfe7xcno]:after,
			.swiper-button-next[data-astro-cid-wfe7xcno]:after {
				background-repeat: no-repeat;
				background-size: contain;
				content: "";
				height: 50px;
				margin: auto;
				width: 50px
			}

			.swiper-button-prev[data-astro-cid-wfe7xcno]:after {
				background-image: url(../images/prev.svg)
			}

			.swiper-button-next[data-astro-cid-wfe7xcno]:after {
				background-image: url(../images/next.svg)
			}

			.swiper-slide[data-astro-cid-wfe7xcno] img[data-astro-cid-wfe7xcno] {
				height: auto;
				width: 100%
			}
		</style>
		<link rel="stylesheet" href="./_astro/cource-1.3PSeZfHN.css" />
	</head>

	<body>
		<div style="text-align:center;">
			<?php if ($empty_flag == 1) { ?>
				<h4>入力にエラーがあります。下記をご確認の上「戻る」ボタンにて修正をお願い致します。</h4>
				<div style="color:red"><?php echo $errm; ?></div>
				<br /><br /><input type="button" value=" 前画面に戻る " onClick="history.back()">
		</div>
	</body>

	</html>
<?php } else { ?>
	送信ありがとうございました。<br />
	送信は正常に完了しました。<br /><br />
	<a href="<?php echo $site_top; ?>">トップページへ戻る&raquo;</a>
	</div>
	</body>

	</html>
<?php

			}
		} else if (($jumpPage == 1 && $sendmail == 1) || $confirmDsp == 0) {
			if ($empty_flag == 1) { ?>
	<div style="text-align:center;">
		<h4>入力にエラーがあります。下記をご確認の上「戻る」ボタンにて修正をお願い致します。</h4>
		<div style="color:red"><?php echo $errm; ?></div><br /><br /><input type="button" value=" 前画面に戻る " onClick="history.back()">
	</div>
<?php
			} else {
				header("Location: " . $thanksPage);
			}
		}

		function checkMail($str)
		{
			$mailaddress_array = explode('@', $str);
			if (preg_match("/^[\.!#%&\-_0-9a-zA-Z\?\/\+]+\@[!#%&\-_0-9a-zA-Z]+(\.[!#%&\-_0-9a-zA-Z]+)+$/", "$str") && count($mailaddress_array) == 2) {
				return true;
			} else {
				return false;
			}
		}
		function h($string)
		{
			global $encode;
			return htmlspecialchars($string, ENT_QUOTES, $encode);
		}
		function sanitize($arr)
		{
			if (is_array($arr)) {
				return array_map('sanitize', $arr);
			}
			return str_replace("\0", "", $arr);
		}
		function sjisReplace($arr, $encode)
		{
			foreach ($arr as $key => $val) {
				$key = str_replace('＼', 'ー', $key);
				$resArray[$key] = $val;
			}
			return $resArray;
		}
		function postToMail($arr)
		{
			global $hankaku, $hankaku_array;
			$resArray = '';
			foreach ($arr as $key => $val) {
				$out = '';
				if (is_array($val)) {
					foreach ($val as $key02 => $item) {
						if (is_array($item)) {
							$out .= connect2val($item);
						} else {
							$out .= $item . ', ';
						}
					}
					$out = rtrim($out, ', ');
				} else {
					$out = $val;
				}

				if (version_compare(PHP_VERSION, '5.1.0', '<=')) {
					if (get_magic_quotes_gpc()) {
						$out = stripslashes($out);
					}
				}

				if ($hankaku == 1) {
					$out = zenkaku2hankaku($key, $out, $hankaku_array);
				}
				if ($out != "confirm_submit" && $key != "httpReferer") {
					$resArray .= "【 " . h($key) . " 】 " . h($out) . "\n";
				}
			}
			return $resArray;
		}
		function confirmOutput($arr)
		{
			global $hankaku, $hankaku_array, $useToken, $confirmDsp, $replaceStr;
			$html = '';
			foreach ($arr as $key => $val) {
				$out = '';
				if (is_array($val)) {
					foreach ($val as $key02 => $item) {

						if (is_array($item)) {
							$out .= connect2val($item);
						} else {
							$out .= $item . ', ';
						}
					}
					$out = rtrim($out, ', ');
				} else {
					$out = $val;
				}

				if (version_compare(PHP_VERSION, '5.1.0', '<=')) {
					if (get_magic_quotes_gpc()) {
						$out = stripslashes($out);
					}
				}

				if ($hankaku == 1) {
					$out = zenkaku2hankaku($key, $out, $hankaku_array);
				}

				$out = nl2br(h($out));
				$key = h($key);
				$out = str_replace($replaceStr['before'], $replaceStr['after'], $out);

				$html .= "<tr><th>" . $key . "</th><td>" . $out;
				$html .= '<input type="hidden" name="' . $key . '" value="' . str_replace(array("<br />", "<br>"), "", $out) . '" />';
				$html .= "</td></tr>\n";
			}
			if ($useToken == 1 && $confirmDsp == 1) {
				$token = sha1(uniqid(mt_rand(), true));
				$_SESSION['mailform_token'] = $token;
				$html .= '<input type="hidden" name="mailform_token" value="' . $token . '" />';
			}

			return $html;
		}

		function zenkaku2hankaku($key, $out, $hankaku_array)
		{
			global $encode;
			if (is_array($hankaku_array) && function_exists('mb_convert_kana')) {
				foreach ($hankaku_array as $hankaku_array_val) {
					if ($key == $hankaku_array_val) {
						$out = mb_convert_kana($out, 'a', $encode);
					}
				}
			}
			return $out;
		}
		function connect2val($arr)
		{
			$out = '';
			foreach ($arr as $key => $val) {
				if ($key === 0 || $val == '') {
					$key = '';
				} elseif (strpos($key, "円") !== false && $val != '' && preg_match("/^[0-9]+$/", $val)) {
					$val = number_format($val);
				}
				$out .= $val . $key;
			}
			return $out;
		}

		function adminHeader($post_mail, $BccMail)
		{
			global $from;
			$header = "From: $from\n";
			if ($BccMail != '') {
				$header .= "Bcc: $BccMail\n";
			}
			if (!empty($post_mail)) {
				$header .= "Reply-To: " . $post_mail . "\n";
			}
			$header .= "Content-Type:text/plain;charset=iso-2022-jp\nX-Mailer: PHP/" . phpversion();
			return $header;
		}
		function mailToAdmin($arr, $subject, $mailFooterDsp, $mailSignature, $encode, $confirmDsp)
		{
			$adminBody = "「" . $subject . "」からメールが届きました\n\n";
			$adminBody .= "＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝\n\n";
			$adminBody .= postToMail($arr); //POSTデータを関数からセット
			$adminBody .= "\n＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝\n";
			$adminBody .= "送信された日時：" . date("Y/m/d (D) H:i:s", time()) . "\n";
			$adminBody .= "送信者のIPアドレス：" . @$_SERVER["REMOTE_ADDR"] . "\n";
			$adminBody .= "送信者のホスト名：" . getHostByAddr(getenv('REMOTE_ADDR')) . "\n";
			if ($confirmDsp != 1) {
				$adminBody .= "問い合わせのページURL：" . @$_SERVER['HTTP_REFERER'] . "\n";
			} else {
				$adminBody .= "問い合わせのページURL：" . @$arr['httpReferer'] . "\n";
			}
			if ($mailFooterDsp == 1) $adminBody .= $mailSignature;
			return mb_convert_encoding($adminBody, "JIS", $encode);
		}

		function userHeader($refrom_name, $to, $encode)
		{
			$reheader = "From: ";
			if (!empty($refrom_name)) {
				$default_internal_encode = mb_internal_encoding();
				if ($default_internal_encode != $encode) {
					mb_internal_encoding($encode);
				}
				$reheader .= mb_encode_mimeheader($refrom_name) . " <" . $to . ">\nReply-To: " . $to;
			} else {
				$reheader .= "$to\nReply-To: " . $to;
			}
			$reheader .= "\nContent-Type: text/plain;charset=iso-2022-jp\nX-Mailer: PHP/" . phpversion();
			return $reheader;
		}
		function mailToUser($arr, $dsp_name, $remail_text, $mailFooterDsp, $mailSignature, $encode)
		{
			$userBody = '';
			if (isset($arr[$dsp_name])) $userBody = h($arr[$dsp_name]) . " 様\n";
			$userBody .= $remail_text;
			$userBody .= "\n＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝\n\n";
			$userBody .= postToMail($arr);
			$userBody .= "\n＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝\n\n";
			$userBody .= "送信日時：" . date("Y/m/d (D) H:i:s", time()) . "\n";
			if ($mailFooterDsp == 1) $userBody .= $mailSignature;
			return mb_convert_encoding($userBody, "JIS", $encode);
		}
		function requireCheck($require)
		{
			$res['errm'] = '';
			$res['empty_flag'] = 0;
			foreach ($require as $requireVal) {
				$existsFalg = '';
				foreach ($_POST as $key => $val) {
					if ($key == $requireVal) {

						if (is_array($val)) {
							$connectEmpty = 0;
							foreach ($val as $kk => $vv) {
								if (is_array($vv)) {
									foreach ($vv as $kk02 => $vv02) {
										if ($vv02 == '') {
											$connectEmpty++;
										}
									}
								}
							}
							if ($connectEmpty > 0) {
								$res['errm'] .= "<p class=\"error_messe\">【" . h($key) . "】は必須項目です。</p>\n";
								$res['empty_flag'] = 1;
							}
						} elseif ($val == '') {
							$res['errm'] .= "<p class=\"error_messe\">【" . h($key) . "】は必須項目です。</p>\n";
							$res['empty_flag'] = 1;
						}

						$existsFalg = 1;
						break;
					}
				}
				if ($existsFalg != 1) {
					$res['errm'] .= "<p class=\"error_messe\">【" . $requireVal . "】が未選択です。</p>\n";
					$res['empty_flag'] = 1;
				}
			}

			return $res;
		}
		function refererCheck($Referer_check, $Referer_check_domain)
		{
			if ($Referer_check == 1 && !empty($Referer_check_domain)) {
				if (strpos($_SERVER['HTTP_REFERER'], $Referer_check_domain) === false) {
					return exit('<p align="center">リファラチェックエラー。フォームページのドメインとこのファイルのドメインが一致しません</p>');
				}
			}
		}
?>