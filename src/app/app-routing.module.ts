import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoodbyeWorldComponent } from './goodbye-world/goodbye-world.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';

const routes: Routes = [
  { path: 'hello-world', component: HelloWorldComponent },
  { path: 'goodbye-world', component: GoodbyeWorldComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
