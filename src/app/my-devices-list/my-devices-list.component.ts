import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DevicesServices } from '../services/Devices.service';

@Component({
  selector: 'app-my-devices-list',
  templateUrl: './my-devices-list.component.html',
  styleUrls: ['./my-devices-list.component.css'],
})
export class MyDevicesListComponent implements OnInit {
  devices: any;
  pageSize: number = 1;
  currentPageIndex = 0;
  pages: any;
  total_pages!: number;
  selectedItem: any;
  modelsList: string[] = ['HUAWEI', 'SAMSUNG', 'IPHONE', 'XIAOMI', 'OPPO'];

  constructor(private serviceDevice: DevicesServices) {}

  generateNumberList(num: number): number[] {
    const numberList: number[] = [];
    for (let i = 1; i <= num; i++) {
      numberList.push(i);
    }
    return numberList;
  }

  ngOnInit(): void {
    console.log('im in this.ngOnInit()');
    this.reloadDevicesList(this.currentPageIndex, this.pageSize, true);
  }

  onSelectedItemChange(newSelectedItem: any) {
    console.log('im in onSelectedItemChange()');

    this.pageSize = newSelectedItem;
    this.reloadDevicesList(this.currentPageIndex, this.pageSize, true);
    console.log('pagesize' + this.pageSize);
  }

  setCurrentPage(index: number): void {
    this.currentPageIndex = index;
    this.reloadDevicesList(this.currentPageIndex, this.pageSize, false);
    console.log('pagesize' + this.pageSize);
  }
  // reload the list of devices
  reloadDevicesList(offset: number, pageSize: number, editPages: boolean) {
    if (!editPages) {
      console.log('im in reloadDevicesList()');
      this.serviceDevice
        .getAllDevices(offset, pageSize)
        .subscribe((res: any) => {
          console;
          this.devices = res.content;
        });
    } else {
      console.log('im in reloadDevicesList()');

      this.serviceDevice
        .getAllDevices(this.currentPageIndex, this.pageSize)
        .subscribe((res: any) => {
          console.log(res);
          this.devices = res.content;
          this.total_pages = res.totalPages;
          this.pages = this.generateNumberList(this.total_pages);
        });
    }
  }
}
