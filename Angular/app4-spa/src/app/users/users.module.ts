import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';

const routes:Routes=[
    {path:'',component:UsersComponent}
]
@NgModule({
    declarations:[UsersComponent],
    imports:[CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes)],
    exports:[]
})

export class UsersModuele{

}