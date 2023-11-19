import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatSort, Sort} from "@angular/material/sort";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {TransactionsService} from "../../services/transactions.service";
import {Transaction} from "../../model/transaction-model";
import {MatPaginator} from "@angular/material/paginator";
import {TokenStorageService} from "../../../Authentication/services/token-storage.service";


@Component({
  selector: 'app-finance-main-content',
  templateUrl: './finance-main-content.component.html',
  styleUrls: ['./finance-main-content.component.css']
})
export class FinanceMainContentComponent implements AfterViewInit{
  displayedColumns: string[] = ['id', 'type', 'costName', 'date', 'description', 'price'];
  transactions: Transaction[] = [];
  constructor(private _liveAnnouncer: LiveAnnouncer, private transactionsService: TransactionsService, private tokenStorage: TokenStorageService) {
    this.loadData(tokenStorage.getUser().id)
  }
  dataSource = new MatTableDataSource(this.transactions);

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  loadData(id: number) {
    this.transactionsService.getAll().subscribe((response:any)=>{
      this.transactions = response.filter((transaction: any) => transaction.userId === id);
      this.dataSource.data = this.transactions;
    });
  };

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

}
