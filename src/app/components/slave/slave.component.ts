import { Component, inject } from '@angular/core';
import { ComService } from '../../services/com/com.service';

@Component({
  selector: 'app-slave',
  imports: [],
  templateUrl: './slave.component.html',
  styleUrl: './slave.component.scss'
})
export class SlaveComponent {

  comService = inject(ComService)


  subscribeReSbj() {
    this.comService.ReSbj.subscribe(data => console.log('replay', data));

  }

  subscribeBeSbj() {
    this.comService.beSbj.subscribe(data => console.log('behaviour', data));

  }

  subscribeSbj() {
    this.comService.sbj.subscribe(data => console.log('normal', data));
  }

}
