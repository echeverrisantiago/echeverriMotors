<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Carousel;

class CarouselController extends Controller
{

    public static function index(){
        $item = Carousel::orderBy('position','asc')->get();

        return $item;
    }

    public function store(Request $req){
        $item = Carousel::create($req->all());

        return json_encode($item);
    }

    public function delete(Request $req){
        Carousel::findOrFail($req->id)->delete();
        return $this->index();

    }

    public static function getItem(Request $req){
        $item = Carousel::whereId($req->id)->first();

        return json_encode($item);
    }

    public function update(Request $req){
        $item = Carousel::findOrFail($req->id);
        if($item){
            $item->position = $req->position;
            $item->type_content = $req->content_type;
            $item->content = $req->image;
            $item->save();
        } else {
            $item = false;
        }

        return json_encode($item);
    }
}
