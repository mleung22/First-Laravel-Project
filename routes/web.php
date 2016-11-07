<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return redirect('main');
});

Route::get('/main',                        'MainController@index');
Route::get('/main/validateUser',           'MainController@validateUser');

Route::get('/administration',              'AdministrationController@index');
Route::get('/administration/getTableData', 'AdministrationController@getTableData');
Route::delete('/administration/deleteRow', 'AdministrationController@deleteRow');
Route::put('/administration/updateRow',    'AdministrationController@updateRow');

Route::get('/addUser',                     'AddUserController@index');
Route::post('/addUser/addRow',             'AddUserController@addRow');

Route::get('/downloads',                   'DownloadsController@index');
Route::get('/downloads/exportUserTable',   'DownloadsController@exportUserTable');
