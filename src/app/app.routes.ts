import { Routes } from '@angular/router';
import { RegisterPageComponent } from './register-page/register-page.component';
import {EoiFormComponent} from "./eoi-form/eoi-form.component";

export const routes: Routes = [
    { path: '', redirectTo: '/eoi-form', pathMatch: 'full' },
    { path: 'eoi-form', component: EoiFormComponent },
    { path: 'register', component: RegisterPageComponent },
];
