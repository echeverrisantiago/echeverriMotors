<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Carousel extends Model
{
    public $timestamps = false;
    protected $table = 'home_carousel';
    protected $fillable = [
        'content',
        'type_content',
        'position'
    ];
}
