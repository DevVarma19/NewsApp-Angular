import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { NewslistComponent } from './components/newslist/newslist.component';

const routes: Routes = [
  { path: 'business', component: NewslistComponent },
  { path: 'entertainment', component: NewslistComponent },
  { path: 'general', component: NewslistComponent },
  { path: 'health', component: NewslistComponent },
  { path: 'science', component: NewslistComponent },
  { path: 'sports', component: NewslistComponent },
  { path: 'technology', component: NewslistComponent },
  { path: 'about', component: AboutComponent },
  { path: '', component: NewslistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }