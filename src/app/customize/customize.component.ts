import { Component, OnInit } from '@angular/core';
import { CustomizeTemplate } from '../customizer/customize-template';

@Component({
  selector: 'app-customize',
  templateUrl: './customize.component.html',
  styleUrls: ['./customize.component.scss']
})
export class CustomizeComponent implements OnInit {
  private customizeTemplate:CustomizeTemplate;
  
  constructor() { 
    this.customizeTemplate = new CustomizeTemplate();
    
  }

  ngOnInit() {
  }

  private showTemplate() {
    console.log('customizeTemplate', this.customizeTemplate)
  }
}
