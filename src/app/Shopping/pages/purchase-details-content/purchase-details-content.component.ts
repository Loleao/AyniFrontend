import { Component, Input } from '@angular/core';
import { Sale } from "../../model/sale";
import { User } from "../../../Authentication/model/user";
import { Product } from "../../model/product";
import { SalesService } from "../../services/sales.service";
import { ProductsService } from "../../services/products.service";
import { UsersService } from "../../../Authentication/services/users.service";
import { MatDialog } from "@angular/material/dialog";
import {ActivatedRoute, Router} from "@angular/router";
import {
  CancelPurchaseDialogContentComponent
} from "../../components/cancel-purchase-dialog-content/cancel-purchase-dialog-content.component";

@Component({
  selector: 'app-purchase-details-content',
  templateUrl: './purchase-details-content.component.html',
  styleUrls: ['./purchase-details-content.component.css']
})
export class PurchaseDetailsContentComponent {
  order: Sale = new Sale();
  user: User = new User();
  product: Product = new Product();

  constructor(
    private saleService: SalesService,
    private productsService: ProductsService,
    private usersService: UsersService,
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.route.params.subscribe(params => {
      const purchaseId = +params['id'];
      this.saleService.getById(purchaseId).subscribe((orderResponse: any) => {
        this.order=orderResponse;

        this.usersService.getById(this.order.acceptedBy).subscribe((userResponse: any) => {
          this.user=userResponse;
        });

        this.productsService.getById(this.order.productId).subscribe((productResponse: any) => {
          this.product=productResponse;
        });
      });
    });
  }

  openDialog() {
    this.dialog.open(CancelPurchaseDialogContentComponent);
  }

  deleteOrder(id: number) {
    this.saleService.delete(id).subscribe(() => { });
  }

  calculateProgress(status: string){
    if (status === 'Pendiente') {
      return 0;
    } else if (status === 'Empaquetando') {
      return 50;
    }
    else if (status === 'Finalizado') {
      return 100;
    } else {
      return 0;
    }
  }

  navigateBack() {
    this.router.navigate(['/purchases']);
  }

}
