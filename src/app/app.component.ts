import {ABPService} from '../services/ABPSerive';
import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, MaxLengthValidator} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ABPService]
})
export class AppComponent implements OnInit {
  // static min(min: number): ValidatorFn
  title = 'app';
  apiForm: FormGroup;
  constructor(private _formBuilder: FormBuilder,public abp:ABPService) {
  }

  ngOnInit(): void {
    this.apiForm = this._formBuilder.group({
      customerType: ['', Validators.compose([Validators.required])],
      custId: ['', Validators.compose([Validators.required])]
    });
    //this.apiForm=this._formBuilder.group({})
  }
  validateForm() {
    console.log("value"+this.apiForm.value.custId)
    this.abp.checkBlackListCutomer(this.apiForm.value.customerType,this.apiForm.value.custId).then(data=>{
    console.log("fetch data"+data)
    })
  }
}
