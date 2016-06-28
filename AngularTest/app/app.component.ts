
import { Component, Inject, DynamicComponentLoader, ViewContainerRef, OnInit, Injector} from '@angular/core';


@Component({
    selector: 'compo1',
    template: '<h1>Este es el componente <b>UNO</b > </h1>'
})
class ChildComponent1 { }

@Component({
    selector: 'compo2',
    template: '<h1>Este es el componente <b>DOS</b > </h1>'
})
class ChildComponent2 { }

@Component({
    selector: 'my-app',
    template: '<div id="child"></div>'
})

export class AppComponent implements OnInit {
    private v: number = 0;

    constructor(private dcl: DynamicComponentLoader, private injector: Injector) { }

    ngOnInit() {
        setInterval(() => {
            if (this.v % 2 == 0) {

                this.dcl.loadAsRoot(ChildComponent1, '#child', this.injector);
            }
            else {
                this.dcl.loadAsRoot(ChildComponent2, '#child', this.injector);
            }
            this.v++;           

        }, 1000);
    }
}
