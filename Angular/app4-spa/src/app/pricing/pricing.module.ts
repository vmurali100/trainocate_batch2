import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PricingComponent } from './pricing.component';

const routes: Routes = [{ path: '', component: PricingComponent }];

@NgModule({
    declarations:[PricingComponent],
    imports:[RouterModule.forChild(routes)]
})
export class PricingModule{
    
}