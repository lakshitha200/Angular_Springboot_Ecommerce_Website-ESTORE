import {  NgModule } from '@angular/core';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { CartComponent } from './Components/cart/cart.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { NotificationComponent } from './Components/notification/notification.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { WishlistComponent } from './Components/wishlist/wishlist.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SignInComponent } from './Components/sign-in/sign-in.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import {MatTooltipModule} from '@angular/material/tooltip';
import { SearchComponent } from './Components/header/search/search.component';
import { BannerComponent } from './Components/home/banner/banner.component';
import { SearchFilterComponent } from './Components/search-filter/search-filter.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CategoriesComponent } from './Components/home/categories/categories.component';
import { ProductListComponent } from './Components/home/product-list/product-list.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CartComponent,
    ProfileComponent,
    NotificationComponent,
    ProductDetailsComponent,
    WishlistComponent,
    SignInComponent,
    SignUpComponent,
    SearchComponent,
    BannerComponent,
    PageNotFoundComponent,
    SearchFilterComponent,
    CategoriesComponent,
    ProductListComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatTooltipModule,
    CarouselModule 
  ],
  providers: [

    
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
