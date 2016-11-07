@extends('layout')
@section('content')

<div class='col-xs-12' id='screenbody' style='position: relative'>

  <div class='row text-center container'>
    <div class='col-xs-5 panel panel-default panel-body center-left'>
      <form class='form-horizontal' role='form'>
        <div class='form-group'>
          <div class='col-xs-4'><label>Username:</label></div>
          <div class='col-xs-8'><input type='text' id='userInput'/></div>
        </div>

        <div class='form-group'>
          <div class='col-xs-4'><label>Password:</label></div>
          <div class='col-xs-8'><input type='text' id='passwordInput'/></div>
        </div>

        <div class='form-group'>
          <div class='col-xs-4 col-xs-offset-1'><button class='btn btn-block btn-success' id='loginButton' disabled>Login</button></div>
          <div class='col-xs-4 col-xs-offset-2'><button class='btn btn-block btn-primary' id='registerButton'>Register</button></div>
        </div>
      </form>
    </div>

  </div>

</div>

@stop
