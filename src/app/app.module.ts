import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatStepperModule} from "@angular/material/stepper";
import {CropsStepperContentComponent} from "./Management/crops/components/stepper-content/stepper-content.component";
import {HttpClientModule} from "@angular/common/http";
import {NgOptimizedImage} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {OverlayModule} from "@angular/cdk/overlay";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {CropsCardStep1ContentComponent} from './Management/crops/components/card-step1-content/card-step1-content.component';
import {CropsCardStep2ContentComponent} from './Management/crops/components/card-step2-content/card-step2-content.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatIconModule} from "@angular/material/icon";
import {MatNativeDateModule} from "@angular/material/core";
import {CropsCardStep3ContentComponent} from './Management/crops/components/card-step3-content/card-step3-content.component';
import {MatDialogModule} from "@angular/material/dialog";
import {CropsDialogContentComponent} from './Management/crops/components/dialog-content/dialog-content.component';
import {SalesStepperContentComponent} from "./Shopping/sales/components/stepper-content/stepper-content.component";
import {SalesCardStep1ContentComponent} from './Shopping/sales/components/card-step1-content/card-step1-content.component';
import {SalesCardStep2ContentComponent} from './Shopping/sales/components/card-step2-content/card-step2-content.component';
import {SalesCardStep3ContentComponent} from './Shopping/sales/components/card-step3-content/card-step3-content.component';
import {SalesDialogContentComponent} from './Shopping/sales/components/dialog-content/dialog-content.component';
import {SalesService} from "./Shopping/sales/services/sales.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ListContentComponent } from './Finance/components/list-content/list-content.component';
import { List2ContentComponent } from './Finance/components/list2-content/list2-content.component';
import {MatDividerModule} from '@angular/material/divider';
import { ButtonContentComponent } from './Finance/components/button-content/button-content.component';
import { Button2ContentComponent } from './Finance/components/button2-content/button2-content.component';
import { FinanceMainContentComponent } from './Finance/components/finance-main-content/finance-main-content.component';
import { DialogContentComponent } from './Finance/components/dialog-content/dialog-content.component';
import { TableCostContentComponent } from './Finance/components/table-cost-content/table-cost-content.component';
import { Button3ContentComponent } from './Finance/components/button3-content/button3-content.component';
import {MatSelectModule} from "@angular/material/select";
import {MatRadioModule} from '@angular/material/radio';
import {MatTableModule} from "@angular/material/table";
import {MatMenuModule} from "@angular/material/menu";
import { TableBillContentComponent } from './Finance/components/table-bill-content/table-bill-content.component';
import { Button4ContentComponent } from './Finance/components/button4-content/button4-content.component';
import { Dialog2ContentComponent } from './Finance/components/dialog2-content/dialog2-content.component';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { SignInComponent } from './Authentication/components/sign-in/sign-in.component';
import { SignUpComponent } from './Authentication/components/sign-up/sign-up.component';

// Angular Material Components
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatListModule} from "@angular/material/list";
import { SelectRolComponent } from './Authentication/components/select-rol/select-rol.component';
import { FarmerMainContentComponent } from './Authentication/components/home/farmer-home/components/farmer-main-content/farmer-main-content.component';
import { MerchantMainContentComponent } from './Authentication/components/home/merchant-home/components/merchant-main-content/merchant-main-content.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import { ProductCardComponent } from './Shopping/products/components/product-card/product-card.component';
import { ProductsContentComponent } from './Shopping/products/pages/products-content/products-content.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatGridListModule} from "@angular/material/grid-list";
import { ProductDetailsContentComponent } from './Shopping/products/pages/product-details-content/product-details-content.component';
import {ProductsService} from "./Shopping/products/services/products.service";
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SignInComponent,
    SignUpComponent,
    SelectRolComponent,
    FarmerMainContentComponent,
    MerchantMainContentComponent,
    CropsStepperContentComponent,
    CropsCardStep1ContentComponent,
    CropsCardStep2ContentComponent,
    CropsCardStep3ContentComponent,
    CropsDialogContentComponent,
    SalesStepperContentComponent,
    SalesCardStep1ContentComponent,
    SalesCardStep2ContentComponent,
    SalesCardStep3ContentComponent,
    SalesDialogContentComponent,
    ListContentComponent,
    List2ContentComponent,
    ButtonContentComponent,
    Button2ContentComponent,
    FinanceMainContentComponent,
    DialogContentComponent,
    TableCostContentComponent,
    Button3ContentComponent,
    TableBillContentComponent,
    Button4ContentComponent,
    Dialog2ContentComponent,
    ProductCardComponent,
    ProductsContentComponent,
    ProductDetailsContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    MatSidenavModule,
    HttpClientModule,
    MatStepperModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    OverlayModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatDialogModule,
    NgOptimizedImage,
    ReactiveFormsModule,
    MatDividerModule,
    MatSelectModule,
    MatRadioModule,
    MatTableModule,
    MatMenuModule,
    MatPaginatorModule,
    MatGridListModule
  ],
  providers: [SalesService, ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
