<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Hash;

class User extends Authenticatable
{
    protected $table = 'users';
    protected $fillable = [
        'document',
        'name',
        'surname',
        'email',
        'rol',
        'password'
    ];

    public function setPasswordAttribute($password){
        $this->attributes['password'] = Hash::make($password);
    }
}
