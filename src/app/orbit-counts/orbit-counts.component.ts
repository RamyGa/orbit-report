import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';


@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
  @Input() satellites: Satellite[];
  constructor() { }

  ngOnInit(): void {
  }


  numOfItems(item : string){

    let counter = 0;
    this.satellites.forEach(element => {
      if(item === element.type){
          counter = counter +1;
        
      }
    });
    return counter;
    
  }

  totalSats(){

    let counter = 0;
    this.satellites.forEach(element => {
     
          counter = counter +1;
        
    
    });
    return counter;
    
  }

}
