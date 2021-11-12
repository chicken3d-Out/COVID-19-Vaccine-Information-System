import { Component, OnInit, ViewChild } from '@angular/core';
import { VaccineRecipientService } from './vaccine-recipient.service';
import { MatTableDataSource } from '@angular/material/table';
import { Recipient } from 'src/app/covid19Interface';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-vaccine-recipient',
  templateUrl: './vaccine-recipient.component.html',
  styleUrls: ['./vaccine-recipient.component.css']
})
export class VaccineRecipientComponent implements OnInit {
  //instantiate an object from interface vaccine recipient
  recipient:Recipient[] = [];

  firstName: any;
  //Pass data to data Source
  dataSource!: MatTableDataSource<any>;
  //Pagination
  @ViewChild('paginator') paginator!: MatPaginator;
  //Sort
  @ViewChild(MatSort) sort!: MatSort;
  
  
  //Data column to display
  columnsToDisplay = ['id', 'firstName', 'middleName', 'lastname', 'category', 'edit', 'delete', 'info'];
  //clear input value from the search
  value = '';
  
  constructor(private vaccinerecipientService: VaccineRecipientService) {  }
  //Get all data from the service by subscribing to it
  getAllVaccineRecipient(): void{
    this.vaccinerecipientService.getAllRecipient().subscribe( 
      data => { 
        this.recipient = data;   
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });     
  }

  //Search by Name

  filterData($event: any){
    this.dataSource.filter = $event.target.value;

  }

  ngOnInit(): void {
    this.getAllVaccineRecipient();
    
  }

}


 