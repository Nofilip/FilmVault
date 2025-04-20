import { Component } from '@angular/core';
import { AdminHeaderComponent } from '../../../components/admin-header/admin-header.component';
import { AdminSidebarComponent } from "../../../components/admin-sidebar/admin-sidebar.component";
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-admin-layout',
  imports: [AdminHeaderComponent, AdminSidebarComponent, RouterOutlet],
  templateUrl: './admin-layout.component.html',
})
export class AdminLayoutComponent {

}
