import { Routes } from "@angular/router";
import { FirstComponent } from "./first/first.component";
import { SecondComponent } from "./second/second.component";
import { HomeComponent } from "./home/home.component";



export const signalRoutes :Routes =[

    {path:'', component:HomeComponent,
        children:[
   {path:'',component:FirstComponent},
   {path:'second',component:SecondComponent},
        ]
    }

]