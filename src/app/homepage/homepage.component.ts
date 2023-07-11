import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  


  handleClick(item: string): void {
    // Handle the click event for the specific item
    console.log(`Clicked on ${item}`);
    // Perform any additional logic or navigation based on the clicked item
  }

  
  

}
