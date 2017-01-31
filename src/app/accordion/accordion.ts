import { Component } from '@angular/core';
import { AccordionViewModel } from './accordionViewModel';
import { AccordionService } from './accordionService';

@Component ({
  selector: "accordion",
  templateUrl: "accordion.html",
  styleUrls: ["accordion.sass"]
})

export class Accordion {
  //item: AccordionViewModel;
  accordionData: Array<any>;

  constructor(
    private accordionService: AccordionService
  ) {
    this.accordionService.getAccordions().subscribe(function next(item) {
      console.log(item)
    });
    //this.item = new AccordionViewModel("new title", "new description");
    this.accordionData = this.getData().map((item)=>{
      return new AccordionViewModel(item.title, item.description)
    })

  }

  getData() {
    return [{title: "title1", description: "desc1"},
      {title: "title2", description: "desc2"},
      {title: "title3", description: "desc3"}];
  }

}
