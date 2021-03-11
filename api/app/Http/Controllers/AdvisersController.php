<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Advisers;

class AdvisersController extends Controller
{
    public static function index(){
        $item = Advisers::all();

        return $item;
    }

    public function store(Request $req){
        $item = Advisers::create($req->all());

        return json_encode($item);
    }

    public function delete(Request $req){
        Advisers::findOrFail($req->id)->delete();
        return $this->index();

    }

    public static function getItem(Request $req){
        $item = Advisers::whereId($req->id)->first();

        return json_encode($item);
    }

    public function update(Request $req){
        $item = Advisers::findOrFail($req->id);
        if($item){
            $item->document = $req->document;
            $item->name = $req->name;
            $item->surnames = $req->surnames;
            $item->email = $req->email;
            $item->phone = $req->phone;
            if($item->image){
                $item->image = $req->image;
            }
            $item->save();
        } else {
            $item = false;
        }

        return json_encode($item);
    }
}
