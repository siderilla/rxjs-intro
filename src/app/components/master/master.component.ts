import { Component, inject } from '@angular/core';
import { ComService } from '../../services/com/com.service';

@Component({
  selector: 'app-master',
  imports: [],
  templateUrl: './master.component.html',
  styleUrl: './master.component.scss'
})
export class MasterComponent {

  comService = inject(ComService);

  changeReSbj() {
    const newString = 'replaySubject' + Date.now();
    this.comService.ReSbj.next(newString)
  }

  changeBeSbj() {
    const newString = 'behaviourSubject' + Date.now();
    this.comService.beSbj.next(newString)
  }

  changeSbj() {
    const newString = 'normalSubject' + Date.now();
    this.comService.sbj.next(newString)
  }

}
