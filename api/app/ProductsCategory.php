<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProductsCategory extends Model
{
    public $timestamps = false;
    protected $table = 'products_categories';
    protected $fillable = [
        'name',
        'description',
        'category_img'
    ];
}
