import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlickCarouselModule  } from 'ngx-slick-carousel';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    SlickCarouselModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
