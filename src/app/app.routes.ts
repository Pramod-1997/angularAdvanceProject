import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        loadChildren: ()=>import('./cancepts/chnageDetection/changeDetection.route').then(l=>l.chamgeDetectionRoute)
    }
];
