<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Sales extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table){
            $table->id();
            $table->string('marke',50);
            $table->string('model',50);
            $table->string('price');
            $table->string('year');
            $table->string('data_sheet',350)->nullable();
            $table->integer('stock');
        });

        Schema::create('customers', function (Blueprint $table){
            $table->id();
            $table->bigInteger('user_document')->unsigned();
            $table->foreign('user_document')->references('document')->on('users')->onDelete('cascade');
            $table->string('review',300);
        });

        Schema::create('advisers', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('document');
            $table->string('image');
            $table->string('name');
            $table->string('surnames');
            $table->string('email');
            $table->bigInteger('phone');
        });

        Schema::create('sales', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('product_id')->unsigned();
            $table->bigInteger('customer_id')->unsigned();
            $table->bigInteger('adviser_id')->unsigned();
            $table->string('sale_state',100);
            $table->foreign('product_id')->references('id')->on('products')->onDelete('cascade');
            $table->foreign('customer_id')->references('id')->on('customers')->onDelete('cascade');
            $table->foreign('adviser_id')->references('id')->on('advisers')->onDelete('cascade');
            $table->timestamp('date')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sales');
        Schema::dropIfExists('products');
        Schema::dropIfExists('customers');
        Schema::dropIfExists('advisers');

    }
}
