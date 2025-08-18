import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { StructuralComponent } from "./structural/structural.component";
import { AttributeComponent } from "./attribute/attribute.component";
import { CustomComponent } from "./custom/custom.component";




export const directiveRoutes: Routes = [

    {
        path: '', component: HomeComponent,
        children: [
            { path: '', component: StructuralComponent },
            { path: 'attribute', component: AttributeComponent },
            { path: 'custom', component: CustomComponent }
        ]
    }

]