<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Sales extends Model
{
    public $timestamps = false;
    protected $table = 'sales';
    protected $fillable = [
        'product_id',
        'customer_id',
        'adviser_id',
        'sale_state',
        'date'
    ];
}
