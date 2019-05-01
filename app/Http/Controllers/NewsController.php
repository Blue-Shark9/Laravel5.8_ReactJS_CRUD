<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\news;
use DB;

class NewsController extends Controller
{
    public function add(Request $res){
    	$title = $res->title;
    	$body = $res->body;
    	$new = DB::table('news')->insert([
    		'title' => $title,
    		'body' => $body
    	]);
    	if($new){
    		return news::orderBy('id','DESC')->get();
    	}
    }

    public function del($id){
    	$del = DB::table('news')->where('id',$id)->delete();
    	if($del){
    		return news::orderBy('id','DESC')->get();
    	}
    }
}
