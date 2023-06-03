/*verificar se OnInit e @Input esta nos imports */

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})


export class BigCardComponent implements OnInit{

  /*criando propriedades para components */
  @Input() public photoCover: string = ""
  @Input() public cardTitle: string = ""
  @Input() public cardDescription: string = ""
  /* para links/*/
  @Input() public Id:string="0"


  constructor(){}
  ngOnInit(): void {
      
  }

}
