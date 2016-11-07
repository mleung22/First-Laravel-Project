<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class AddUserController extends Controller
{
    public function index(){
      return view('addUser');
    }

    public function addRow(Request $request){
      $user = new User();
      return $user -> addRow($request);
    }

}
