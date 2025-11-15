import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: '',
        loadComponent: () => import('./Main/first-page/first-page.component')
            .then(m => m.FirstPageComponent)

    },
    {
        path: 'second',
        loadComponent: () => import('./Main/second-page/second-page.component')
            .then(m => m.SecondPageComponent)
    },
    {
         path: 'third',
        loadComponent: () => import('./Main/third-page/third-page.component')
            .then(m => m.ThirdPageComponent)
    },
    {
        path: 'fourty',
        loadComponent: () => import('./Main/fourth-page/fourth-page.component')
            .then(m => m.FourthPageComponent)
    },
    {
        path: '**',
        redirectTo: ''

    }

];
