import { Router } from "@angular/router";
import { ProductService } from "./../product.service";
import { IProduct } from "./../product.model";
import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-product-read",
    templateUrl: "./product-read.component.html",
    styleUrls: ["./product-read.component.scss"],
})
export class ProductReadComponent implements OnInit {
    products: IProduct[] = [];
    displayedColumns = ["id", "name", "price", "action"];

    constructor(
        private productService: ProductService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.productService.read().subscribe((products) => {
            this.products = products;
            console.log(this.products);
        });
    }

    deleteProduct(id: string): void {
        this.productService.delete(id).subscribe(() => {
            this.router.routeReuseStrategy.shouldReuseRoute = () => false;
            this.router.onSameUrlNavigation = "reload";
            this.router.navigate([this.router.url]);
            this.productService.showMessage("Produto excluído!");
        });
    }
}
