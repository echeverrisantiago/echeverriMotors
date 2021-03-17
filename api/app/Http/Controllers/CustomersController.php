<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class CustomersController extends Controller
{
    public function index(Request $req){
        $user = User::join('roles','users.rol','=','roles.id')
        ->where('roles.role','=','customer')
        ->select(
            'users.name',
            'users.document'
        )
        ->get();

         return json_encode($user);
     }

}
