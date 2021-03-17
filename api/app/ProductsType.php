<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProductsType extends Model
{
    public $timestamps = false;
    protected $table = 'products_type';
    protected $fillable = [
        'product',
        'category'
    ];
}
