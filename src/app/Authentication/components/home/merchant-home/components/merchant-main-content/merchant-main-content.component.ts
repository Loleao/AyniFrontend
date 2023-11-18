import { Component } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Order} from "../../../../../../Shopping/model/order";
import {OrdersService} from "../../../../../../Shopping/services/orders.service";
import {Sale} from "../../../../../../Shopping/model/sale";
import {SalesService} from "../../../../../../Shopping/services/sales.service";
import {TokenStorageService} from "../../../../../services/token-storage.service";

@Component({
  selector: 'app-merchant-main-content',
  templateUrl: './merchant-main-content.component.html',
  styleUrls: ['./merchant-main-content.component.css']
})
export class MerchantMainContentComponent {
  orders: Order[]=[];
  sales: Sale[]=[];

  // Table
  displayedColumns: string[] = ['name', 'quantity', 'ordered_date'];
  dataSource!: MatTableDataSource<Order>;
  constructor(private ordersService: OrdersService,
              private salesServices: SalesService,
              private tokenStorage: TokenStorageService) {
    this.loadData(1);
  }

  loadData(userId: number) {
    this.ordersService.getAll().subscribe((response: any) => {
      this.orders = response.filter((purchase: any) => purchase.orderedBy === userId);
      this.dataSource = new MatTableDataSource(this.orders);

      this.orders.forEach(purchase => {
        this.salesServices.getById(purchase.saleId).subscribe((productResponse: any) => {
          this.sales.push(productResponse);
        });
      });

      console.log('Token JWT:', this.tokenStorage.getToken());

    });
  }

  getProduct(saleId: number): any {
    return this.sales.find(sale => sale.id === saleId);
  }
}
