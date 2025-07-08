import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ParentComponent } from "./lifecyclehook/parent/parent.component";


export const componentRoute:Routes =[
    {path:'',component:HomeComponent},
     {path:'lifecycle',component:ParentComponent}
]