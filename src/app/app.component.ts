import { Component, OnInit, TemplateRef, ViewChild, AfterViewInit, Inject, ViewContainerRef, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { CallingComponentsComponent } from './components/calling-components/calling-components.component';
import { CallingTwoComponent } from './components/calling-two/calling-two.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testApp';
  name = 'Angular';

  
  @ViewChild('appenHere', {static : false, read : ViewContainerRef}) target: ViewContainerRef;
  private componentRef: ComponentRef<any>;
  
  constructor(private resolver: ComponentFactoryResolver) { }
  
  addNewComponent() {
    //esta variable local factoriza el componente que se va a llamar
    let childComponent = this.resolver.resolveComponentFactory(CallingComponentsComponent); 

     // esta propiedad de clase llama o crear el componente factorizado anteriormente en la variable local
    this.componentRef = this.target.createComponent(childComponent);
  }

  callingTwoComponent() {
    let childComponent2 = this.resolver.resolveComponentFactory(CallingTwoComponent);

    this.componentRef = this.target.createComponent(childComponent2);  
  }

  //probando funcion que remueve el componente
  removeComponent() {
    this.target.clear();
  }
}
