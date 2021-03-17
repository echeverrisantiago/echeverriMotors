<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ProductsType extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products_type', function (Blueprint $table){
            $table->id();
            $table->bigInteger('product')->unsigned();
            $table->foreign('product')->references('id')->on('products');
            $table->bigInteger('category')->unsigned();
            $table->foreign('category')->references('id')->on('products_categories');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products_type');
    }
}
