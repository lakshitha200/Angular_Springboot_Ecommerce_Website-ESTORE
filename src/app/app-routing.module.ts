import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { NotificationComponent } from './Components/notification/notification.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { WishlistComponent } from './Components/wishlist/wishlist.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { SignInComponent } from './Components/sign-in/sign-in.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { AppComponent } from './app.component';
import { CartComponent } from './Components/cart/cart.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { SearchComponent } from './Components/header/search/search.component';
import { SearchFilterComponent } from './Components/search-filter/search-filter.component';


const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"product-details/:id",component:ProductDetailsComponent},

  {path:"cart",component:CartComponent},
  {path:"notifications",component:NotificationComponent},
  {path:"wishlist",component:WishlistComponent},
  {path:"wishlist/product-details",component:WishlistComponent},
  {path:"profile/:username",component:ProfileComponent},
  {path:"search",component:SearchFilterComponent},
  {path:"home/sign-in",component:SignInComponent},
  {path:"home/sign-up",component:SignUpComponent},
  {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
