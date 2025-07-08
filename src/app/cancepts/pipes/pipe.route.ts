import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AsyncComponent } from "./async/async.component";
import { CurrencyComponent } from "./currency/currency.component";


 export const pipeRoute:Routes =[
    {
       path:'',
       component:HomeComponent
    },
     {
       path:'asyncpipe',
       component:AsyncComponent
    },
    {
       path:'currencypipe',
       component:CurrencyComponent
    }
]