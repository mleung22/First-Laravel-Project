<!DOCTYPE html>
<html>
  <head>
    <title>Boberdoo Test</title>
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/misc.css" rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha/css/bootstrap.min.css">
  </head>
  <meta name="csrf-token" content="{!! csrf_token() !!}">
  
  @include('nav')

  <div class='container-fluid'>
    <body class='background-color'>


      @yield('content')

      <!-- NOTE: Move to a footer -->
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha/js/bootstrap.min.js"></script>
      <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
      <script src="js/bootstrap.min.js"></script>
      <script src="js/underscore-min.js"></script>
      <script src="js/commonUtil.js"></script>
      <script src="js/nav.js"></script>
      <script src="js/main/administration.js"></script>
      <script src="js/main/addUser.js"></script>
      <script src="js/main/downloads.js"></script>
      <script src="js/main/main.js"></script>
    </body>
  </div>

</html>
