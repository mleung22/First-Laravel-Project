@extends('layout')
@section('content')

<div class='col-xs-10 col-xs-offset-1' id='screenbody'>

  <div class='row'>&nbsp;</div>

  <div class='col-xs-12 text-center'>
    <label><font color='black'>Downloads</font></label>
    <table class='table table-bordered' id='downloadsTable'>
      <thead class='thead-inverse'>
        <tr>
          <th>File Name</th>
          <th>Date / Time</th>
          <th>File Size</th>
        </tr>
      </thead>
      <tbody>
      </tbody>
    </table>
  </div>

  <div class='row'>&nbsp;</div>

  <div class='col-xs-12'>
    <div class='col-xs-3 col-xs-offset-9'><button class='btn btn-block btn-primary' id='exportButton'>Export</button></div>
  </div>

</div>
@stop
