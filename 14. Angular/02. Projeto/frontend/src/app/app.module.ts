import { NgModule, LOCALE_ID } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderComponent } from "./components/template/header/header.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { FooterComponent } from "./components/template/footer/footer.component";
import { NavComponent } from "./components/template/nav/nav.component";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { HomeComponent } from "./views/home/home.component";
import { ProductsCrudComponent } from "./views/products-crud/products-crud.component";
import { ProductCreateComponent } from "./components/products/product-create/product-create.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { BgBlueDirective } from "./directives/bg-blue.directive";
import { ProductReadComponent } from "./components/products/product-read/product-read.component";
import { MatTableModule } from "@angular/material/table";
import localePT from "@angular/common/locales/pt";
import { registerLocaleData } from "@angular/common";
import { ProductUpdateComponent } from "./components/products/product-update/product-update.component";
registerLocaleData(localePT);
@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        NavComponent,
        HomeComponent,
        ProductsCrudComponent,
        ProductCreateComponent,
        BgBlueDirective,
        ProductReadComponent,
        ProductUpdateComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatCardModule,
        MatButtonModule,
        MatSnackBarModule,
        HttpClientModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
    ],
    providers: [{ provide: LOCALE_ID, useValue: "pt-BR" }],
    bootstrap: [AppComponent],
})
export class AppModule {}
