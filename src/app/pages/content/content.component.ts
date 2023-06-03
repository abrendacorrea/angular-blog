import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dataFake}from '../../data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent implements OnInit {

  photoCover:string = ""
  contentTitle:string = ""
  contentTitle2:string = ""
  contentDescription:string = ""

  contentDescription2:string  = ""

  private id:string | null = "0"

  
  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
     this.id = value.get("id")
    )

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter(article => article.id == id)[0]

    this.contentTitle = result.title
    this.contentTitle2 = result.title2
    this.contentDescription = result.description
    this.contentDescription2 = result.description2
    this.photoCover = result.photoCover

  }

}

