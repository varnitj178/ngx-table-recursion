import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() rows: any;
  @ViewChild('myTable') table: any;

  expanded: any = {};
  timeout: any;
  column: any;
  columns: any;
  static a: any[];

  ColumnMode = ColumnMode;
  static counter = 0;
  constructor() {
    TableComponent.counter++;
  }

  ngOnInit(): void {
    console.log(TableComponent.counter);
    console.log(this.table?.rowDetail);

    console.log(this.rows);

    this.column = Object.keys(this.rows[0]).filter((res) => res !== 'details');
    this.columns = [];
    for (let key of this.column) {
      let item;

      item = {
        name: key,
        prop: key,
        flexGrow: key === 'Owner Id' ? 2.0 : 1.0,
        minWidth: 300,
      };
      this.columns.push(item);
    }
    console.log(this.columns);
  }

  onPage(event: any) {
    clearTimeout(this.timeout);
  }
  toggleExpandRow(row: any) {
    console.log('Toggled Expand Row!', row);
    console.log('----------------->           ', this.table);

    this.table.rowDetail.toggleExpandRow(row);
  }

  onDetailToggle(event: any) {
    console.log('Detail Toggled', event);
  }
}
