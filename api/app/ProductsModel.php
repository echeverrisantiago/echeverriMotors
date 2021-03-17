<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProductsModel extends Model
{
    public $timestamps = false;
    protected $table = 'products';
    protected $fillable = [
        'marke',
        'reference',
        'model',
        'year',
        'price',
        'stock',
        'data_sheet',
        'main_img'
    ];
}
