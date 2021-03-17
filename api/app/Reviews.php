<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Reviews extends Model
{
    public $timestamps = false;
    protected $table = 'products_reviews';
    protected $fillable = [
        'sale_id',
        'review'
    ];
}
