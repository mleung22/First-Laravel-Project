<?php

namespace App\Models;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
  public function getTableData(){
    // NOTE: Different ways to get datatable data

    // return \DB::select("SELECT * FROM USERS");
    // return \DB::table('users')->get();
    return User::paginate(5);
  }

  public function addRow(Request $request){
    $user = new User;

    $isUserInDB = \DB::table('users')
                      -> where('login_name', $request->input('loginName'))
                      -> count();

    if($isUserInDB !== 0){
      $response = [
        "isValid" => false,
        "text"    => 'That login name is already taken'
      ];
    }
    else {
      $user->first_name = $request->input('firstName');
      $user->last_name  = $request->input('lastName');
      $user->login_name = $request->input('loginName');
      $user->password   = $request->input('password');

      $user->save();

      $response = [
        "isValid" => true,
        "text"    => 'success'
      ];
    }

    return $response;

  }

  public function updateRow(Request $request){
    $id   = $request->input('id');
    $user = User::find($id);

    $user->first_name = $request->input('firstName');
    $user->last_name  = $request->input('lastName');
    $user->login_name = $request->input('loginName');
    $user->password   = $request->input('password');

    $user->save();
  }

  public function deleteRow(Request $request){
    $id   = $request->input('id');
    $user = User::find($id);

    $user->delete();
  }

  public function validateUser(Request $request){
    $loginId  = $request->input('login_name');
    $password = $request->input('password');

    $user     = User::where('login_name', $loginId)->first();

    if($user != '' && $user->password === $password){
      $response = [
        "isValid" => true,
        "text"    => 'success'
      ];
    }
    else {
      $response = [
        "isValid" => false,
        "text"    => 'Login id and/or password is invalid'
      ];
    }

    return $response;

  }

  public function exportUserTable(){

    // Same as SELECT ID FIRST_NAME LAST_NAME LOGIN_NAME PASSWORD FROM USERS
    $data = \DB::table('users')
              -> select('id','first_name', 'last_name', 'login_name', 'password')
              -> get();

    if(count($data) > 0){

      $export_data = "User ID, First Name, Last Name, Login Name, Password\n";

      foreach($data as $val){

          // Appends data to export_data in csv format
          $export_data.= $val->id         .','.
                         $val->first_name .','.
                         $val->last_name  .','.
                         $val->login_name .','.
                         $val->password   ."\n";
      }

    }

    date_default_timezone_set("America/New_York");

    $file_name = "users_" . date('Y_m_d_h_i_s') . ".csv";
    $file_size = strlen($export_data) / 1000 . ' kB';

    $response = [
      "exportData" => $export_data,
      "dateTime"   =>  date('Y-m-d h:i:s'),
      "fileName"   => $file_name,
      "fileSize"   => $file_size
    ];

    return response($response);
  }
}

?>
