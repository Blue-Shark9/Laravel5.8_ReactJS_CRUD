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
    return view('welcome');
});

Route::get('news',function(){

	return App\news::orderBy('id','DESC')->get();
});
Route::post('addNews','NewsController@add');

Route::get('delNews/{id}','NewsController@del');

Route::get('login',function(){
	return view('login');
});
