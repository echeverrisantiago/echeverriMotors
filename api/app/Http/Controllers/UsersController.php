<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Hash;

class UsersController extends Controller
{
    public function store(Request $req){
       $user = User::create($req->all());

        return json_encode($user);
    }

    public function login(Request $req){
        $user = User::whereEmail($req->email)->first();

        if($user){
        $passwordVerify = Hash::check($req->password,$user->password);
        $userLogin = true;
        if($passwordVerify){
            $userLogin = true;
        } else{
            $userLogin = false;
        }
    } else{
        $userLogin = false;
    }
         return json_encode($userLogin);
     }
}
