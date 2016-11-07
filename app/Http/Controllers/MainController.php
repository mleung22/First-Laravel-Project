<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class MainController extends Controller
{
    public function index(){
      return view('main');
    }

    public function validateUser(Request $request){
      $user = new User();
      return $user -> validateUser($request);
    }


}
