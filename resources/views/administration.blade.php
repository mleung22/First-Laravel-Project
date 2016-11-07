@extends('layout')
@section('content')

<div class='col-xs-10 col-xs-offset-1' id='screenbody'>

  <div class='row'>&nbsp;</div>

  <div class='col-xs-12 text-center'>
    <label><font color='black'>Manage Users</font></label>
    <table class='table table-bordered' id='usersTable'>
      <thead class='thead-inverse'>
        <tr>
          <th>User ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Login</th>
          <th>Password</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
      </tbody>
    </table>
  </div>

  <div class='row'>&nbsp;</div>

  <div class='col-xs-12'>
    <div class='col-xs-9'>
      <ul class="pagination pg-black no-vertical-margins pull-left" id='paginationUL'>

      </ul>
    </div>
    <div class='col-xs-3'><button class='btn btn-block btn-primary' id='addButton'>Add New User</button></div>
  </div>

</div>
@stop
