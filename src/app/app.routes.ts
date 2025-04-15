import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { AboutUsComponent } from './Pages/company/about-us/about-us.component';
import { VadhuVarSuchikaComponent } from './Pages/products/vadhu-var-suchika/vadhu-var-suchika.component';
import { MyDreamPropertyComponent } from './Pages/products/my-dream-property/my-dream-property.component';
import { CareerComponent } from './Pages/career/career.component';
import { ServicesComponent } from './Pages/services/services.component';
import { ContactUsComponent } from './Pages/contact-us/contact-us.component';
import { MatrimonyComponent } from './Pages/domains/main-domains/matrimony/matrimony.component';
import { RealEstateComponent } from './Pages/domains/main-domains/real-estate/real-estate.component';
import { HealthcareComponent } from './Pages/domains/main-domains/healthcare/healthcare.component';
import { EducationComponent } from './Pages/domains/main-domains/education/education.component';
import { ShortMatrimonyComponent } from './Pages/domains/short-domains/short-matrimony/short-matrimony.component';
import { ShortRealEstateComponent } from './Pages/domains/short-domains/short-real-estate/short-real-estate.component';
import { ShortHealthcareComponent } from './Pages/domains/short-domains/short-healthcare/short-healthcare.component';
import { ShortEducationComponent } from './Pages/domains/short-domains/short-education/short-education.component';
import { FaqComponent } from './Pages/faq/faq.component';
import { BeVibestarComponent } from './Pages/products/be-vibestar/be-vibestar.component';
import { LifeAtGFSSComponent } from './Pages/company/life-at-gfss/life-at-gfss.component';

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
            {
                path: 'be-vibestar',
                component: BeVibestarComponent
            }
        ]
    },

    // Main Domains
    {
        path: 'domains',
        children: [
            {
                path: 'matrimony',
                component: MatrimonyComponent
            },
            {
                path: 'real-estate',
                component: RealEstateComponent
            },
            {
                path: 'healthcare',
                component: HealthcareComponent
            },
            {
                path: 'education',
                component: EducationComponent
            }
        ]
    },

    // Short Domains
    {
        path: 'short-domains',
        children: [{
            path: 'matrimony',
            component: ShortMatrimonyComponent
        },
        {
            path: 'real-estate',
            component: ShortRealEstateComponent
        },
        {
            path: 'healthcare',
            component: ShortHealthcareComponent
        },
        {
            path: 'education',
            component: ShortEducationComponent
        }
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

    {
        path: 'faq',
        component: FaqComponent
    }
];
