import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomePageModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'programs',
    loadChildren: () => import('./pages/programs/programs.module').then(m => m.ProgramsPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./pages/search/search.module').then(m => m.SearchPageModule)
  },
  {
    path: 'trainers',
    loadChildren: () => import('./pages/trainers/trainers.module').then(m => m.TrainersPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'articles',
    loadChildren: () => import('./pages/articles/articles.module').then(m => m.ArticlesPageModule)
  },
  {
    path: 'article-detail',
    loadChildren: () => import('./pages/article-detail/article-detail.module').then(m => m.ArticleDetailPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsPageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./pages/edit-profile/edit-profile.module').then(m => m.EditProfilePageModule)
  },
  {
    path: 'appoinment-booking',
    loadChildren: () => import('./pages/appoinment-booking/appoinment-booking.module').then(m => m.AppoinmentBookingPageModule)
  },
  {
    path: 'trainer-profile',
    loadChildren: () => import('./pages/trainer-profile/trainer-profile.module').then(m => m.TrainerProfilePageModule)
  },
  {
    path: 'terms-conditions',
    loadChildren: () => import('./pages/terms-conditions/terms-conditions.module').then(m => m.TermsConditionsPageModule)
  },
  {
    path: 'confirm-booking',
    loadChildren: () => import('./pages/confirm-booking/confirm-booking.module').then(m => m.ConfirmBookingPageModule)
  },
  {
    path: 'forgot',
    loadChildren: () => import('./pages/forgot/forgot.module').then(m => m.ForgotPageModule)
  },
  {
    path: 'video-list',
    loadChildren: () => import('./pages/video-list/video-list.module').then(m => m.VideoListPageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./pages/reset-password/reset-password.module').then(m => m.ResetPasswordPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./pages/notification/notification.module').then(m => m.NotificationPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
