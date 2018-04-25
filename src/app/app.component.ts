import { 
Component
} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  styles:[`
  	 h3{
  	  color: red;
  	 }
  `]
})
export class AppComponent {

	constructor(){}

	loadedFeature: string = 'recipe';

	onNavigate(feature: string){
		this.loadedFeature = feature;
	}

}
