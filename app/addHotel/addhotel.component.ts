import {Component, Directive } from 'angular2/core';
import {FormBuilder, Validators, ControlGroup, Control, FORM_DIRECTIVES, FORM_BINDINGS} from 'angular2/common'
import {Http, HTTP_PROVIDERS, Headers} from 'angular2/http';
import 'rxjs/Rx';
import {Router, ROUTER_PROVIDERS} from 'angular2/router'


@Component({
 selector: 'AddHotel',
 templateUrl: 'app/addhotel/addhotel.html',
 styleUrls: ['css/styles.css']
})
export class AddHotelComponent {

   hotelForm: ControlGroup;
   http: Http;
   router: Router;
   postResponse: String;


  constructor(builder: FormBuilder, http: Http,  router: Router) {
 	this.http = http;
 	this.router = router;
  this.hotelForm = builder.group({
      naziv: ["", Validators],
      zvezdice: ["", Validators],
      komentar: ["", Validators],
    });
   }

 onAddRoom(): void {
	var data = "&naziv="+this.hotelForm.value.naziv+"&zvezdice="+this.hotelForm.value.zvezdice+"&komentar="+this.hotelForm.value.komentar;
	var headers = new Headers();
	headers.append('Content-Type', 'application/x-www-form-urlencoded');
	this.http.post('http://localhost/php/addhotel.php',data, {headers:headers})
  .map(res => res)
  .subscribe( data => this.postResponse = data,
err => alert(JSON.stringify(err)),
() => {
if(this.postResponse._body.indexOf("error") === -1){
  alert("Uspesno ste dodali hotel ste hotel");
    this.router.parent.navigate(['./Home']);
 }else{
  alert("Greska! Niste dodali hotel");
 }
 }
);

}
}

