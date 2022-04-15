import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
 
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { HelloWorldBindingsComponent } from './hello-world-bindings/hello-world-bindings.component';
import { HelloWorldDiComponent } from './hello-world-di/hello-world-di.component';
import { HelloWorldInterpolationComponent } from './hello-world-interpolation/hello-world-interpolation.component';
import { HelloWorldNgifComponent } from './hello-world-ngif/hello-world-ngif.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'hello-world', component: HelloWorldComponent },
      { path: 'hello-world-bindings', component: HelloWorldBindingsComponent },
      { path: 'hello-world-di', component: HelloWorldDiComponent },
      { path: 'hello-world-interpolation', component: HelloWorldInterpolationComponent },
      { path: 'hello-world-ngif', component: HelloWorldNgifComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'shipping', component: ShippingComponent }
    ]),
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    HelloWorldComponent,
    HelloWorldBindingsComponent,
    HelloWorldDiComponent,
    HelloWorldInterpolationComponent,
    HelloWorldNgifComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/