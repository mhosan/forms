import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormTemplateModule } from "./form-template/form-template.module";
import { FormReactiveModule } from './form-reactive/form-reactive.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        FormTemplateModule,
        FormReactiveModule
    ]
})
export class AppModule { }
