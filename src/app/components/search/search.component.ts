import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchFormControl: FormControl = this.fb.control(null);

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void { }

}
