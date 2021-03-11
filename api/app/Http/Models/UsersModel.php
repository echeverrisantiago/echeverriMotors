<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UsersModel extends Model
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
}
