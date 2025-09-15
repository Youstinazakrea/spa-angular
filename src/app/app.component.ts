import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeroComponent } from './features/users/components/hero/hero.component';
import { HeaderComponent } from './features/users/shared/header/header.component';
import { AboutComponent } from './features/users/components/about/about.component';
import { FooterComponent } from './features/users/shared/footer/footer.component';
import { AdminNavbarComponent } from './features/admin/shared/admin-navbar/admin-navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'finalproject';
}
