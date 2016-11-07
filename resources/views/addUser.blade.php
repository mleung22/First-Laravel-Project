@extends('layout')
@section('content')

<div class='col-xs-12' id='screenbody'>

  <div class='row text-center'>
    <div class='row'><label><font color='black'>New User</font></label></div>

    <div class='col-xs-4 col-xs-offset-4 panel panel-default panel-body container'>
      <form class='form-horizontal' role='form' id='addForm'>
        <div class='form-group'>
          <div class='col-xs-5'><label>First Name:</label></div>
          <div class='col-xs-7'><input type='text' id='firstNameInput'/></div>
        </div>

        <div class='form-group'>
          <div class='col-xs-5'><label>Last Name:</label></div>
          <div class='col-xs-7'><input type='text' id='lastNameInput'/></div>
        </div>

        <div class='form-group'>
          <div class='col-xs-5'><label>Username:</label></div>
          <div class='col-xs-7'><input type='text' id='loginIdInput'/></div>
        </div>

        <div class='form-group'>
          <div class='col-xs-5'><label>Password:</label></div>
          <div class='col-xs-7'><input type='text' id='passwordInput'/></div>
        </div>

        <div class='form-group'>
          <div class='col-xs-4 col-xs-offset-1'><button class='btn btn-block btn-success' id='addButton' disabled>Add</button></div>
          <div class='col-xs-4 col-xs-offset-2'><button class='btn btn-block btn-danger' id='cancelButton'>Cancel</button></div>
        </div>
      </form>
    </div>

  </div>

</div>

@stop
