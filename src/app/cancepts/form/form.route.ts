import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";



export const formRoute:Routes =[
    {
        path:'',
        component:HomeComponent
    },
    {
      path:'validation',
      loadComponent:()=>import('./validation/validation.component').then(l=>l.ValidationComponent)
    }
]