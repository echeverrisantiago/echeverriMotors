<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProductsInfo extends Model
{
    public $timestamps = false;
    protected $table = 'product_info';
    protected $fillable = [
        'product_id',
        'content',
        'row_number',
        'column_number',
        'type_content'
    ];
}
