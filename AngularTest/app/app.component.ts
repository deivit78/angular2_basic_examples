
import {Component, ComponentRef, Input, ViewContainerRef, ComponentFactory, ComponentResolver, ViewChild, Injectable} from '@angular/core';

export interface IComponent {
    content: string;
}

@Component({
    selector: 'compo1',
    templateUrl: '/app/compo1.html'
})
class ChildComponent1 {
    @Input() content: string;

    constructor() { };
}

@Component({
    selector: 'compo2',
    templateUrl: '/app/compo2.html'
})
class ChildComponent2 {
    @Input() content: string;

    constructor() { };
}

@Component({
    selector: 'my-app',
    template: '<div #target></div>'
})


export class AppComponent{
    @ViewChild('target', { read: ViewContainerRef }) target;
    private v: number = 0;
    cmpRef: ComponentRef<IComponent>;
    private isViewInitialized: boolean = false;
    constructor(private componentResolver: ComponentResolver ) { }

    updateComponent() {
        setInterval(() => {
            if (!this.isViewInitialized) {
                return;
            }
            if (this.cmpRef) {
                this.cmpRef.destroy();
            }
            if (this.v % 2 == 0) {
                this.componentResolver.resolveComponent(ChildComponent1).then(factory => {
                    this.cmpRef = this.target.createComponent(factory);
                    this.cmpRef.instance.content = "UNO!!";
                });
            }
            else {
                this.componentResolver.resolveComponent(ChildComponent2).then(factory => {
                    this.cmpRef = this.target.createComponent(factory);
                    this.cmpRef.instance.content = "DOS!!";
                });
            }
            
            this.v++;           

        }, 1000);
    }
    ngOnChanges() {
        this.updateComponent();
    }

    ngAfterViewInit() {
        this.isViewInitialized = true;
        this.updateComponent();
    }

    ngOnDestroy() {
        if (this.cmpRef) {
            this.cmpRef.destroy();
        }
    }
}
