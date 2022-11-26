
import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../service/userdata.service';

@Component({
  selector: 'app-crmhome',
  templateUrl: './crmhome.component.html',
  styleUrls: ['./crmhome.component.css']
})
export class CRMHomeComponent implements OnInit {
  userList: any = []
  searchKey = ' '
  constructor(private userData: UserdataService) {
  }
  ngOnInit(): void {
    this.userData.getUserdata().subscribe((data) => {
      this.userList = data
    })

    this.userData.search.subscribe((data) => {
      this.searchKey = data
      console.log(this.searchKey)
    })
  }
}
