import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignInComponent} from "./Authentication/components/sign-in/sign-in.component";
import {SignUpComponent} from "./Authentication/components/sign-up/sign-up.component";
import {SelectRolComponent} from "./Authentication/components/select-rol/select-rol.component";
import {MerchantMainContentComponent} from "./Authentication/components/home/merchant-home/components/merchant-main-content/merchant-main-content.component";
import {FarmerMainContentComponent} from "./Authentication/components/home/farmer-home/components/farmer-main-content/farmer-main-content.component";
import {SalesStepperContentComponent} from "./Shopping/sales/components/stepper-content/stepper-content.component";
import {TableCostContentComponent} from "./Finance/components/table-cost-content/table-cost-content.component";
import {CropsStepperContentComponent} from "./Management/crops/components/stepper-content/stepper-content.component";
import {TableBillContentComponent} from "./Finance/components/table-bill-content/table-bill-content.component";
import {FinanceMainContentComponent} from "./Finance/components/finance-main-content/finance-main-content.component";

const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  { path: 'signin', component: SignInComponent },
  { path: 'signup', component: SignUpComponent},
  { path: 'select-rol', component: SelectRolComponent},
  { path: 'merchant-home', component: MerchantMainContentComponent},
  { path: 'farmer-home', component: FarmerMainContentComponent },
  { path: 'sales', component: SalesStepperContentComponent },
  { path: 'crops', component: CropsStepperContentComponent},
  { path: 'costlist', component: TableCostContentComponent },
  { path: 'billlist', component: TableBillContentComponent },
  { path: 'finance', component: FinanceMainContentComponent },
  { path: '**', redirectTo: 'signin', pathMatch: 'full'  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
