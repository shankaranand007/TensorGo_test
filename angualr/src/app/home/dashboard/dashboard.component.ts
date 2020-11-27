import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import * as moment from 'moment';

import { MomentModule } from 'ngx-moment';
import { Router } from '@angular/router';
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    model: any = {};
    myDate: Date;
    editFilter: Boolean = false
    rows: any = [];
    public selectedMoment = new Date();
    constructor(private homeservice: HomeService, private router: Router) {
        this.dataLoad()
    }
    ngOnInit() {
    }
    popup(params) {
        if (params == 1 || params == "1") {
            this.homeservice.editUpdate(this.model)
                .subscribe((data) => {
                    this.editFilter = false
                    this.dataLoad()
                })
        } else {
            this.editFilter = false
        }
    }
    export() {
        window.open('http://localhost:4000/api/user/export', "_blank");
    }
    edit(data) {
        window.scrollTo(0, 0);
        this.model = data;
        this.editFilter = true;
        console.log(data)
    }

    dataLoad() {
        this.homeservice.getData()
            .subscribe((data) => {
                console.log(data, data['error_code'])
                if (!data['error_code']) {
                    this.rows = data['data']
                } else {
                    console.log("something went wrong")
                }
            });

    }
}
