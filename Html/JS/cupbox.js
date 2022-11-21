var body = $response.body
    .replace(/<head>/, '<head><link rel="stylesheet" href="https://raw.githubusercontent.com/Pydebt/Cuttlefish/master/Html/cupbox.css" type="text/css">');
$done({ body });
