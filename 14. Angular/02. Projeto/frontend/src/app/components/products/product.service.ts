import { catchError, EMPTY, Observable } from "rxjs";
import { IProduct } from "./product.model";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
    providedIn: "root",
})
export class ProductService {
    baseUrl = "http://localhost:3001/products";

    constructor(
        private snackBar: MatSnackBar,
        private httpClient: HttpClient
    ) {}

    showMessage(msg: string, isError: boolean = false): void {
        this.snackBar.open(msg, "X", {
            duration: 3000,
            horizontalPosition: "center",
            verticalPosition: "top",
            panelClass: isError ? ["msg-error"] : ["msg-success"],
        });
    }

    create(product: IProduct): Observable<IProduct> {
        return this.httpClient
            .post<IProduct>(this.baseUrl, product)
            .pipe(catchError((e) => this.handlingWithErrors(e)));
    }

    read(): Observable<IProduct[]> {
        return this.httpClient
            .get<IProduct[]>(this.baseUrl)
            .pipe(catchError((e) => this.handlingWithErrors(e)));
    }

    readById(productId: string): Observable<IProduct> {
        const url = `${this.baseUrl}/${productId}`;
        return this.httpClient
            .get<IProduct>(url)
            .pipe(catchError((e) => this.handlingWithErrors(e)));
    }

    update(product: IProduct): Observable<IProduct> {
        const url = `${this.baseUrl}/${product.id}`;
        return this.httpClient
            .put<IProduct>(url, product)
            .pipe(catchError((e) => this.handlingWithErrors(e)));
    }

    delete(productId: string): Observable<IProduct> {
        const url = `${this.baseUrl}/${productId}`;
        return this.httpClient
            .delete<IProduct>(url)
            .pipe(catchError((e) => this.handlingWithErrors(e)));
    }

    handlingWithErrors(e: any): Observable<any> {
        this.showMessage("Ocorreu um erro :(", true);
        return EMPTY;
    }
}
