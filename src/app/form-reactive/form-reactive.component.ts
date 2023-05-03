import { Component } from '@angular/core';
import { FormControl} from '@angular/forms';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent {

  public nombre:FormControl = new FormControl('');

}
