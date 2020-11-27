import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeRoutingModule } from './home.routing';
import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeService } from './home.service';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from '../shared/layout/header.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MomentModule } from 'ngx-moment';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MomentModule,
        NgxDatatableModule,
        ReactiveFormsModule,
        HomeRoutingModule,
        SharedModule,
        HttpClientModule,
    ],
    exports: [],
    declarations: [
        HomeComponent,
        HeaderComponent,
        DashboardComponent
    ],
    providers: [
        HomeService
    ],
})
export class HomeModule { }
