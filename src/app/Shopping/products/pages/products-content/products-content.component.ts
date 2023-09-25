import {Component, OnInit} from '@angular/core';
import {Product} from "../../models/product";
import {ProductsService} from "../../services/products.service";
import {Router} from "@angular/router";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-products-content',
  templateUrl: './products-content.component.html',
  styleUrls: ['./products-content.component.css']
})
export class ProductsContentComponent implements OnInit{

  productsList: Product[]= [];
  pagedList: Product[]= [];
  breakpoint: number = 3;
  length: number = 0;
  pageSize: number = 6;
  pageSizeOptions: number[] = [3, 6, 9, 12];

  constructor(private productsService:ProductsService, private router: Router) {
  }

  navigateToProductDetails(id: number) {
    this.router.navigate(['products/details', id]);
  }
  OnPageChange(event: PageEvent){
    let startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if(endIndex > this.length){
      endIndex = this.length;
    }
    this.pagedList = this.productsList.slice(startIndex, endIndex);
  }

  onResize(event:any) { //to adjust to screen size
    this.breakpoint = (event.target.innerWidth <= 800) ? 1 : 3;
  }
  ngOnInit(): void {
    this.productsService.getAll().subscribe((response:any) => {
      this.productsList = response;
      this.pagedList = this.productsList.slice(0,6)
      this.breakpoint = (window.innerWidth <= 800) ? 1 : 3;
      this.length = this.productsList.length;
    });
  }
}
