import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        loadChildren: ()=>import('./cancepts/chnageDetection/changeDetection.route').then(l=>l.chamgeDetectionRoute)
    },
     {
        path:'form',
        loadChildren: ()=>import('./cancepts/form/form.route').then(l=>l.formRoute)
    },
     {
        path:'pipe',
        loadChildren: ()=>import('./cancepts/pipes/pipe.route').then(l=>l.pipeRoute)
    },
     {
        path:'component',
        loadChildren: ()=>import('./cancepts/component/component.route').then(l=>l.componentRoute)
    }
];
