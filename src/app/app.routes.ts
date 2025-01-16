import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './resume/about.component';
import { JavaComponent } from './projects/java/java.component';
import { PythonComponent } from './projects/python/python.component';
import { AngularComponent } from './projects/angular/angular.component';


export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "projects", 
    component: ProjectsComponent,
    children: [
        {
            path: "java",
            component: JavaComponent,
        },
        {
            path: "python",
            component: PythonComponent,
        },
        {
            path: "angular",
            component: AngularComponent,
        }
    ]
    },
    {path: "resume", component: AboutComponent}
];
