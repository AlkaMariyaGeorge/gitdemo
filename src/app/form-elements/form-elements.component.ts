import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-elements',
  templateUrl: './form-elements.component.html',
  styleUrls: ['./form-elements.component.sass']
})
export class FormElementsComponent implements OnInit {
reactiveForm:FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.reactiveForm = this.formBuilder.group({
      name: '',
      address: ''
    })
  }
onSubmit(){
  let data=this.reactiveForm.value;
  console.log(data);
}
}
