import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/covid19Interface';

@Component({
  selector: 'app-add-vaccine-recipient',
  templateUrl: './add-vaccine-recipient.component.html',
  styleUrls: ['./add-vaccine-recipient.component.css']
})
export class AddVaccineRecipientComponent implements OnInit {
  
  constructor() { }
  panelOpenState = false;
  //selectedCatgory
  selected: any;
  //Category
  category: Category[] = [
    {category: 'A'},
    {category: 'B'},
    {category: 'C'},
    {category: 'D'},
    {category: 'E'}
  ];

  onSubmit(data:any ,cat:any){

    const firstname = data.value.firstname;
    const middlename = data.value.middlename;
    const lastname = data.value.lastname;
    const category = cat;

    const mobileNum = data.value.number;
    const email = data.value.email;
    const address = data.value.address;
    const birthday = data.value.birthday;

    const jsonData = {
      "fname": firstname,
      "mname": middlename,
      "lname:": lastname,
      "category": category,
      "mobile": mobileNum,
      "email": email,
      "address": address,
      "bday": birthday
    };

    console.log(jsonData);

  }

  ngOnInit(): void {

  }

}
