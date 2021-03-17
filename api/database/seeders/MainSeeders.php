<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\User;
use App\Roles;
use App\ProductsModel;
use App\Carousel;
use App\Advisers;
use App\ProductsType;
use App\ProductsCategory;
use App\Sales;
use App\Reviews;

class MainSeeders extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        /*
        DEFINO LOS ROLES
        */
        $rol1 = new Roles;
        $rol1->role = 'admin';
        $rol1->save();

        $rol2 = new Roles;
        $rol2->role = 'customer';
        $rol2->save();
        /*
        DEFINO LOS USUARIOS
        */
        $user1 = new User;
        $user1->document = '1000870575';
        $user1->name = 'JUAN SANTIAGO';
        $user1->surname = 'ECHEVERRI DIOSA';
        $user1->email = 'echeverrisantiago2018@gmail.com';
        $user1->rol = $rol1->id;
        $user1->password = 'deathband';
        $user1->save();

        $user2 = new User;
        $user2->document = '1431870372';
        $user2->name = 'GABRIEL';
        $user2->surname = 'ZAPATA MÚNERA';
        $user2->email = 'zapatamuneragabi23@gmail.com';
        $user2->rol = $rol2->id;
        $user2->password = 'therionband';
        $user2->save();
        /*
        DEFINO LAS CATEGORÍAS DE LOS PRODUCTOS
        */
        $productcategory1 = new ProductsCategory;
        $productcategory1->name = 'eléctrico';
        $productcategory1->description = 'Un vehículo eléctrico es un vehículo propulsado por uno o más motores eléctricos, usando energía eléctrica almacenada normalmente en baterías recargables. Los motores eléctricos proporcionan a los vehículos eléctricos un par motor instantáneo, proporcionando una aceleración rápida desde parado y continua.';
        $productcategory1->category_img = 'https://firebasestorage.googleapis.com/v0/b/echeverrimotors.appspot.com/o/products-categories%2Fel%C3%A9ctricos%2Felectricos.webp?alt=media&token=985e08a8-e2a7-44b2-9d01-174d552cde4d';
        $productcategory1->save();

        $productcategory2 = new ProductsCategory;
        $productcategory2->name = 'híbrido';
        $productcategory2->description = 'Un vehículo híbrido es aquel en el que se utilizan sistemas de propulsión híbridos, entre ellos autobuses, automóviles, camiones, bicicletas, barcos, aviones y trenes. El término, se refiere más comúnmente al vehículo híbrido eléctrico, que combina un motor de combustión interna y uno o varios motores eléctricos.';
        $productcategory2->category_img = 'https://firebasestorage.googleapis.com/v0/b/echeverrimotors.appspot.com/o/products-categories%2Fel%C3%A9ctricos%2Fhibridos.jpg?alt=media&token=cd17c419-ccc0-4228-b2d5-e24863f0843e';
        $productcategory2->save();

        $productcategory3 = new ProductsCategory;
        $productcategory3->name = 'gasolina';
        $productcategory3->description = 'Tipo de combustible genérico';
        $productcategory3->category_img = 'https://firebasestorage.googleapis.com/v0/b/echeverrimotors.appspot.com/o/products-categories%2Fel%C3%A9ctricos%2Fgasolina.jpg?alt=media&token=c2ba9ac3-cbd5-4888-8892-50f92237ad63';
        $productcategory3->save();

        $productcategory4 = new ProductsCategory;
        $productcategory4->name = 'automóvil';
        $productcategory4->description = 'Vehículo automóvil de cuatro ruedas para circular por tierra, que se dirige mediante un volante, está destinado al transporte de personas y tiene capacidad para un máximo de nueve plazas.';
        $productcategory4->category_img = 'https://firebasestorage.googleapis.com/v0/b/echeverrimotors.appspot.com/o/products-categories%2Fel%C3%A9ctricos%2Fautom%C3%B3vil.jpg?alt=media&token=3d966983-38e2-4edd-af73-8afe235d5d83';
        $productcategory4->save();

        /*
        DEFINO LOS PRODUCTOS
        */

        $product1 = new ProductsModel;
        $product1->reference = 'A2F81C5DSX';
        $product1->marke = 'ford';
        $product1->model = 'fiesta';
        $product1->price = '26000000';
        $product1->year = '2020';
        $product1->main_img = 'https://firebasestorage.googleapis.com/v0/b/echeverrimotors.appspot.com/o/products%2Fdefault%2Fdefault.jpg?alt=media&token=2b2965b2-c269-4aaa-a742-005b71e7de88';
        $product1->data_sheet = 'https://firebasestorage.googleapis.com/v0/b/echeverrimotors.appspot.com/o/products%2Fdefault%2Fdata_sheet%2Fdata_sheet.pdf?alt=media&token=65de627e-96ea-479a-80b5-41c476db3350';
        $product1->stock = 3;
        $product1->save();

        /*
        RELACIONO UN PRODUCTO CON SUS CATEGORÍAS
        */

        $producttype1 = new ProductsType;
        $producttype1->product = $product1->id;
        $producttype1->category = $productcategory1->id;
        $producttype1->save();

        $producttype2 = new ProductsType;
        $producttype2->product = $product1->id;
        $producttype2->category = $productcategory4->id;
        $producttype2->save();

        /*
        AÑADO LOS ITEMS DEL CAROUSEL
        */

        $itemslide1 = new Carousel;
        $itemslide1->position = 1;
        $itemslide1->type_content = 'img';
        $itemslide1->content = 'https://firebasestorage.googleapis.com/v0/b/echeverrimotors.appspot.com/o/home-carousel%2F1%2F1.jpg?alt=media&token=e2048ad3-0bef-4596-98e2-b717d12fc4c4';
        $itemslide1->save();

        $itemslide2 = new Carousel;
        $itemslide2->position = 2;
        $itemslide2->type_content = 'img';
        $itemslide2->content = 'https://firebasestorage.googleapis.com/v0/b/echeverrimotors.appspot.com/o/home-carousel%2F2%2F2.jpg?alt=media&token=128edf8a-fa8f-41b1-8fdc-8f1c941d46f2';
        $itemslide2->save();

        $itemslide3 = new Carousel;
        $itemslide3->position = 3;
        $itemslide3->type_content = 'img';
        $itemslide3->content = 'https://firebasestorage.googleapis.com/v0/b/echeverrimotors.appspot.com/o/home-carousel%2F3%2F3.gif?alt=media&token=cae1a6d9-3c0f-49b7-b49d-bd89e6765df8';
        $itemslide3->save();

        $itemslide4 = new Carousel;
        $itemslide4->position = 4;
        $itemslide4->type_content = 'img';
        $itemslide4->content = 'https://firebasestorage.googleapis.com/v0/b/echeverrimotors.appspot.com/o/home-carousel%2F4%2F4.jpg?alt=media&token=a742864d-5ef6-4b26-84c9-d6969a666a2d';
        $itemslide4->save();

        /*
        AÑADO LOS ASESORES
        */

        $adviser1 = new Advisers;
        $adviser1->document = 1222370573;
        $adviser1->image = 'https://firebasestorage.googleapis.com/v0/b/echeverrimotors.appspot.com/o/advisers%2F1000870575%2F1000870575.jpg?alt=media&token=475a2713-c3c6-40d5-a06d-bb88c4856267';
        $adviser1->name = 'CRISTIAN CAMILO';
        $adviser1->surnames = 'URIBE ESTRADA';
        $adviser1->email = 'uribe.estrada.24@outlook.com';
        $adviser1->phone = 3225133722;
        $adviser1->save();

        $adviser2 = new Advisers;
        $adviser2->document = 112085572;
        $adviser2->image = 'https://firebasestorage.googleapis.com/v0/b/echeverrimotors.appspot.com/o/advisers%2F230232132%2F230232132.jpg?alt=media&token=6d543caa-7fad-4083-9341-ae5baedfea6c';
        $adviser2->name = 'MIGUEL FRANCISCO';
        $adviser2->surnames = 'MARTINEZ GIRALDO';
        $adviser2->email = 'girarldo.miguel.14@outlook.com';
        $adviser2->phone = 3209254188;
        $adviser2->save();

        /*
        AÑADO VENTAS
        */

        $sale1 = new Sales;
        $sale1->product_id = $product1->id;
        $sale1->customer_id  = $user2->document;
        $sale1->adviser_id  = $adviser1->id;
        $sale1->sale_state = 'COMPLETE';
        $sale1->date = now()->format('Y-m-d H:i:s');
        $sale1->save();

        /*
        INGRESO REVIEWS DEL PRODUCTO
        */

        $review1 = new Reviews;
        $review1->sale_id = $sale1->id;
        $review1->review = 'Me encantó! Lo recomiendo';
        $review1->save();
    }
}
