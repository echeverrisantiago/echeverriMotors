<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
Use App\Sales;
Use App\Reviews;
Use App\Advisers;
Use App\Users;

class SalesController extends Controller
{

     public static function index(){
        $products = Sales::join('users','users.document','=','sales.customer_id')
        ->join('products','products.id','=','sales.product_id')
        ->join('advisers','advisers.id','=','sales.adviser_id')
        ->select(
            'sales.id',
            'users.name as client_name',
            'advisers.name as adviser_name',
            'sales.sale_state',
            'sales.date',
            'products.marke',
            'products.model',
            'products.year'
        )
        ->get();

        return $products;
    }

    public function store(Request $req){
        $sales = new Sales;
        $sales->product_id = $req->product_id;
        $sales->customer_id = $req->customer_id;
        $sales->adviser_id = $req->adviser_id;
        $sales->sale_state = $req->sale_state;
        $sales->date = now()->format('Y-m-d H:i:s');
        $sales->save();

        return json_encode($sales);
     }

     public function update(Request $req){
        $sales = Sales::findOrFail($req->id);

        if($sales):
        $sales->product_id = $req->product_id;
        $sales->customer_id = $req->customer_id;
        $sales->adviser_id = $req->adviser_id;
        $sales->sale_state = $req->sale_state;
        $sales->date = now()->format('Y-m-d H:i:s');
        $sales->save();
        endif;

        return json_encode($sales);
     }

     public function delete(Request $req){
        Reviews::where('sale_id','=',$req->id)->delete();
        Sales::findOrFail($req->id)->delete();
        return $this->index();

    }

    public static function getSale(Request $req){
        $sales = Sales::whereId($req->id)->first();

        return json_encode($sales);
    }
}
