import { Component } from '@angular/core';
import { faEarthAmerica, faJetFighter, faShieldHalved, faFaceSmileBeam, faCopyright } from '@fortawesome/free-solid-svg-icons';
import { faFaceSmileBeam as faSmileBeam } from '@fortawesome/free-regular-svg-icons';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './footer.component.html',

})

export class FooterComponent {

  faEarthAmerica = faEarthAmerica;
  faJetFighter = faJetFighter;
  faShieldHalved = faShieldHalved;
  faSmileBeam = faSmileBeam;
  faCopyright = faCopyright;

  openIndex: number | null = null;

  toggleSection(index: number) {
    this.openIndex = this.openIndex === index ? null : index;
  }

}
