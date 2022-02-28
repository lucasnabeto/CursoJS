import { ProductUpdateComponent } from "./components/products/product-update/product-update.component";
import { ProductReadComponent } from "./components/products/product-read/product-read.component";
import { ProductCreateComponent } from "./components/products/product-create/product-create.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./views/home/home.component";
import { ProductsCrudComponent } from "./views/products-crud/products-crud.component";

const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
    },
    {
        path: "products",
        component: ProductsCrudComponent,
    },
    {
        path: "products/create",
        component: ProductCreateComponent,
    },
    {
        path: "products/update/:id",
        component: ProductUpdateComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
