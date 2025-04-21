import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { AboutUsComponent } from './Pages/company/about-us/about-us.component';
import { VadhuVarSuchikaComponent } from './Pages/products/vadhu-var-suchika/vadhu-var-suchika.component';
import { MyDreamPropertyComponent } from './Pages/products/my-dream-property/my-dream-property.component';
import { CareerComponent } from './Pages/career/career.component';
import { ServicesComponent } from './Pages/services/services.component';
import { ContactUsComponent } from './Pages/contact-us/contact-us.component';
import { LifeAtGFSSComponent } from './Pages/company/life-at-gfss/life-at-gfss.component';
import { VideosComponent } from './Pages/company/videos/videos.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    // Company
    {
        path: 'company',
        children: [
            {
                path: 'about-us',
                component: AboutUsComponent
            },
            {
                path: 'life-at-gfss',
                component: LifeAtGFSSComponent
            },
            {
                path:'videos',
                component:VideosComponent
            }
        ]
    },

    // Products
    {
        path: 'products',
        children: [
            {
                path: 'vadhu-var-suchika',
                component: VadhuVarSuchikaComponent
            },
            {
                path: 'my-dream-property',
                component: MyDreamPropertyComponent
            },
        ]
    },

    {
        path: 'services',
        component: ServicesComponent
    },

    {
        path: 'careers',
        component: CareerComponent
    },

    {
        path: 'contact-us',
        component: ContactUsComponent
    },

];
