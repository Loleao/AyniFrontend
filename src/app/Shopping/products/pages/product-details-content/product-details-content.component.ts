import {Component, OnInit} from '@angular/core';
import {Product} from "../../models/product";
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-product-details-content',
  templateUrl: './product-details-content.component.html',
  styleUrls: ['./product-details-content.component.css']
})
export class ProductDetailsContentComponent implements OnInit{

  product: Product = new Product();

  constructor(private route: ActivatedRoute, private productsService: ProductsService) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id:number = Number(params.get('id'));
      this.productsService
          .getById(id).subscribe((response:any) => {
        this.product = response;

      } )
    });

  }
}
