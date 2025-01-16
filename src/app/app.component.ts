import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { JavaComponent } from './projects/java/java.component';
import { PythonComponent } from './projects/python/python.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomeComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  count: number;

  @ViewChild(JavaComponent)
  java: JavaComponent = new JavaComponent;
  @ViewChild(PythonComponent)
  python: PythonComponent = new PythonComponent;

  constructor() {
    this.count = this.java.count + this.python.count;
  }

}
