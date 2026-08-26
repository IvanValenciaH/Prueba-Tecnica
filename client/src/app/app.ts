import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PersonasComponent } from './Components/Personas/personas';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatToolbarModule, PersonasComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'Rick and Morty App';
}
