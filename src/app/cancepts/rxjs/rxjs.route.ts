import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ObservableComponent } from "./observable/observable.component";
import { OperatorsComponent } from "./operators/operators.component";


export const rxjsRoutes :Routes =[
    {path:'',component:HomeComponent},
    {path:'obesrvable',component:ObservableComponent},
     {path:'operators',component:OperatorsComponent},

]