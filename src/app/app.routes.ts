import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: '',
        loadComponent: () => import('./Main/first-page/first-page.component')
            .then(m => m.FirstPageComponent)

    },
    {
        path: '**',
        redirectTo: ''

    }

];
