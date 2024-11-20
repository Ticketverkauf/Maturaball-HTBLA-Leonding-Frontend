import {Component, HostListener, Input, OnInit, signal} from '@angular/core';
import {HeroComponent} from '../hero/hero.component';
import {RoutineComponent} from '../routine/routine.component';
import {PointerArrowComponent} from '../pointer-arrow/pointer-arrow.component';
import {PictureShowComponent} from '../picture-show/picture-show.component';
import { FooterComponent } from "../footer/footer.component";
import { ActivatedRoute } from '@angular/router';
import { DialogService } from '../dialog.service';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    RoutineComponent,
    PointerArrowComponent,
    PictureShowComponent,
    FooterComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(private route : ActivatedRoute, private dialogService: DialogService, private keycloakService: KeycloakService) {
  }

  async ngOnInit() {
    if(this.route.snapshot.queryParams['site'] == 2){
      this.dialogService.openDialog(PictureShowComponent, '80vh', '90vw', true);
    }
  }

  @Input()
  color : string = 'violet';

  arrowActive = signal(true);

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    this.arrowActive.set(false);
  }
}
