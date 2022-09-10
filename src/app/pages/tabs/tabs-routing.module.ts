import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'home',
                loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
            },
            {
                path: 'programs',
                loadChildren: () => import('../programs/programs.module').then(m => m.ProgramsPageModule)
            },
            {
                path: 'search',
                loadChildren: () => import('../search/search.module').then(m => m.SearchPageModule)
            },
            {
                path: 'trainers',
                loadChildren: () => import('../trainers/trainers.module').then(m => m.TrainersPageModule)
            },
            {
                path: 'profile',
                loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
            },
            {
                path: 'articles',
                loadChildren: () => import('../articles/articles.module').then(m => m.ArticlesPageModule)
            },
            {
                path: 'article-detail',
                loadChildren: () => import('../article-detail/article-detail.module').then(m => m.ArticleDetailPageModule)
            },
            {
                path: 'settings',
                loadChildren: () => import('../settings/settings.module').then(m => m.SettingsPageModule)
            },
            {
                path: 'trainer-profile',
                loadChildren: () => import('../trainer-profile/trainer-profile.module').then(m => m.TrainerProfilePageModule)
            },
            {
                path: 'edit-profile',
                loadChildren: () => import('../edit-profile/edit-profile.module').then(m => m.EditProfilePageModule)
            },
            {
                path: 'reset-password',
                loadChildren: () => import('../reset-password/reset-password.module').then(m => m.ResetPasswordPageModule)
            },
            {
                path: 'notification',
                loadChildren: () => import('../notification/notification.module').then(m => m.NotificationPageModule)
            },
            {
                path: 'terms-conditions',
                loadChildren: () => import('../terms-conditions/terms-conditions.module').then(m => m.TermsConditionsPageModule)
            },
            {
                path: '',
                redirectTo: '/tabs/home',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabsPageRoutingModule { }
