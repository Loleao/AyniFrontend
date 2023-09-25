import { Injectable } from '@angular/core';
import {BaseCostService} from "../../shared/services/base-cost.service";
import {Bill} from "../model/bill-model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BillsService extends BaseCostService<Bill> {

  constructor(http:HttpClient) {
    super(http);
    this.resourceEndpoint = '/billslist';
  }
}