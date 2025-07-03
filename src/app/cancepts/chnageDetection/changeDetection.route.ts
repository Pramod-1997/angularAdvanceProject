import { Routes } from "@angular/router";

export const chamgeDetectionRoute:Routes =[
    {
        path:'',
        loadComponent:()=> import('./parent/parent.component').then(l=>l.ParentComponent)
    },
    {
        path:'child',
        loadComponent:()=>import('./child/child.component').then(l=>l.ChildComponent)
    }
]