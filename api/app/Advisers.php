<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Advisers extends Model
{
    protected $table = 'advisers';
    public $timestamps = false;
    protected $fillable = [
        'document',
        'image',
        'name',
        'surnames',
        'email',
        'phone'
    ];
}
