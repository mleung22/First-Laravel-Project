<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class AdministrationController extends Controller
{
    public function index(){
      return view('administration');
    }

    public function getTableData(){
      $user = new User();
      return $user -> getTableData();
    }

    public function updateRow(Request $request){
      $user = new User();
      return $user -> updateRow($request);
    }

    public function deleteRow(Request $request){
      $user = new User();
      return $user -> deleteRow($request);
    }
}
