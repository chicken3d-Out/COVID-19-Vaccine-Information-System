import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SigninData } from './signin';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  constructor(private http: HttpClient, private router: Router) { }
  //Check if adminUser Exist
  urlAdmin = "/api/admin/";
  isAuthenticated = false;
  admin = false;
  //Get all the admin from the database
  getAllAdmin():Observable<SigninData[]>{
    return this.http.get<SigninData[]>(`${this.urlAdmin}login.php`);
  }
  authenticate(signdata: SigninData):boolean{
    if(this.checkCredentials(signdata.username, signdata.password) || this.admin==true){
      //for error not to show up
      return false;
    }
    //make true for username and password not found
    return true;
  }
  private checkCredentials(username: string, password: string):boolean{

      this.getAllAdmin().subscribe(result => {
        const admin = result.find((auth:any) => {
           return auth.username === username && auth.password === password
       });
       if(admin){
         //set admin to true
         this.admin = true;
         //set Credentials to true
         this.isAuthenticated = true

         //navigate to dashboard
         this.router.navigate(['dashboard'])

         //return method true
         return true;
       }else{
         //set admin to false
         this.admin = false;

         //set is authenticated to false
         this.isAuthenticated = true

         //return this method to false
         return false;
       }
      });
      //return admin value
      return this.admin;
  }
  //set anything to false when admin logs out
  public logout(){
    this.isAuthenticated = false;
    this.admin = false;
    this.router.navigate(['']);
  }
}
