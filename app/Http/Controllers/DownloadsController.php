<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class DownloadsController extends Controller
{
    public function index(){
        return view('downloads');
    }

    public function exportUserTable(){
      $user = new User();
      return $user -> exportUserTable();
    }
}
