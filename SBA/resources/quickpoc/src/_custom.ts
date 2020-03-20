import {Injectable, Type} from "@angular/core";
import {HashLocationStrategy} from "@angular/common";
import {Routes} from "@angular/router";
import {Utils} from "@sinequa/core";
import {Search, Preview} from "@sinequa/components";
import {AppCoreConfig} from "./app-core-config";
import {App} from "./components/app/app";

export const customAppType = App;
export const customRoutes: Routes = [
    {path: "search", component: Search},
    {path: "preview", component: Preview},
    {path: "**", redirectTo: "search"}
];
export const customLocationStrategy = HashLocationStrategy;

@Injectable()
export class CustomAppCoreConfig extends AppCoreConfig {
    constructor() {
        super();
        Utils.merge(this.pluggableComponents, {
        });
    }
}

export function getCustomImports(): any[] {
    return [
    ];
}

export function getCustomDeclarations(): any[] {
    return [
    ];
}

export function getCustomEntryComponents(): any[] {
    return [
    ];
}

export function getCustomProviders(): any[] {
    return [
    ];
}