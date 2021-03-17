<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ProductsModel;
use App\ProductsInfo;

class ProductsController extends Controller
{

    public static function index(){
        $products = ProductsModel::all();

        return $products;
    }

    public function store(Request $req){
        $product = ProductsModel::create($req->all());

        return json_encode($product);
    }

    public function delete(Request $req){
        ProductsModel::findOrFail($req->id)->delete();
        return $this->index();

    }

    public static function getProduct(Request $req){
        $product = ProductsModel::whereId($req->id)->first();

        return json_encode($product);
    }

    public static function getProductInfo(Request $req){
        $product = ProductsInfo::where('product_id',$req->id)
        ->orderBy('row_number','asc')->get();
        if(!$product){
            return false;
        } else {
            return $product;
        }
    }

    public function update(Request $req){
        $product = ProductsModel::findOrFail($req->id);
        if($product){
            $product->reference = $req->reference;
            $product->marke = $req->marke;
            $product->model = $req->model;
            $product->year = $req->year;
            $product->stock = $req->stock;
            $product->price = $req->price;
            $product->data_sheet = $req->data_sheet;
            $product->save();
        } else {
            $product = false;
        }

        return json_encode($product);
    }
}
