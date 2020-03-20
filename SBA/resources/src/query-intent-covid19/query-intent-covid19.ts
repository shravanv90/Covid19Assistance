import {Component, Input, OnInit, OnDestroy, ChangeDetectorRef} from "@angular/core";
import {Subscription} from "rxjs";
import {CCFlexLayout, SearchService, ObserverService, Results, Action, Utils} from "@sinequa/core";

@Component({
    selector : "query-intent-covid19",
    templateUrl : "./query-intent-covid19.html",
    styleUrls : ["./query-intent-covid19.css"]
})

export class Covid19 implements OnInit {
    @Input() intent: Results.QueryIntent;
    @Input() results: Results;
    root: string;
    url1: string;
    url2: string;

    constructor(private observerService: ObserverService) {
    }

    ngOnInit() {
        let answer = this.intent.datasets.links.rows;
        if (answer.length > 0) {
            this.root = answer[0].sourcestr1;
            this.url1 = answer[0].sourcestr2;
            this.url2 = answer[0].sourcestr3;
        }
        
    }
}