import { Component, OnInit, ViewChild } from '@angular/core';
import { ColumnMode, TableColumn } from '@swimlane/ngx-datatable';
import { employeeData, columns } from '../data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('myTable') table: any;
  rows: any[] = [
    {
      id: 0,
      name: 'Ramsey Cummings',
      gender: 'male',
      age: 52,
      address: {
        state: 'South Carolina',
        city: 'Glendale',
      },
      details: [
        {
          id: '0.1',
          name: 'Stefanie Huff',
          gender: 'female',
          age: 70,
          address: {
            state: 'Arizona',
            city: 'Beaverdale',
          },
          details: [
            {
              idd: '0.1.1',
              name: 'Forbes Levine',
              gender: 'male',
              age: 34,
              address: {
                state: 'Vermont',
                city: 'Norris',
              },
            },
          ],
        },
        {
          id: 0.2,
          name: 'Mabel David',
          gender: 'female',
          age: 52,
          address: {
            state: 'New Mexico',
            city: 'Grazierville',
          },
        },
      ],
    },
    {
      id: 1,
      name: 'Stefanie Huff',
      gender: 'female',
      age: 70,
      address: {
        state: 'Arizona',
        city: 'Beaverdale',
      },
      details: [
        {
          id: 1.1,
          name: 'Stefanie Huff',
          gender: 'female',
          age: 70,
          address: {
            state: 'Arizona',
            city: 'Beaverdale',
          },
          details: [
            {
              idd: '1.1.1',
              name: 'Forbes Levine',
              gender: 'male',
              age: 34,
              address: {
                state: 'Vermont',
                city: 'Norris',
              },
            },
          ],
        },
        {
          id: 1.2,
          name: 'Mabel David',
          gender: 'female',
          age: 52,
          address: {
            state: 'New Mexico',
            city: 'Grazierville',
          },
        },
      ],
    },
  ];

  expanded: any = {};
  timeout: any;

  ColumnMode = ColumnMode;

  constructor() {}
  ngOnInit(): void {}

  onPage(event: any) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      console.log('paged!', event);
    }, 100);
  }
  toggleExpandRow(row: any) {
    console.log('Toggled Expand Row!', row);
    this.table.rowDetail.toggleExpandRow(row);
  }

  onDetailToggle(event: any) {
    console.log('Detail Toggled', event);
  }
}
