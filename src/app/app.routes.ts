import { Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogViewComponent } from './blog-view/blog-view.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'blog',
        component:BlogComponent
    },
    {
        path:'about',
        component:AboutComponent
    },
    {
        path:'blog-view',
        component:BlogViewComponent
    }

];
