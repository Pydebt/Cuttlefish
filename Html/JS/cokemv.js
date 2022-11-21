var body = $response.body
    .replace(/<head>/, '<head><link rel="stylesheet" href="https://raw.githubusercontent.com/Pydebt/Cuttlefish/master/Html/cokemv.css" type="text/css">');
$done({ body });
