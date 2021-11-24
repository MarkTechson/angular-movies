import { NgModule } from '@angular/core';
import {
  ServerModule,
  ServerTransferStateModule,
} from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { RX_ANGULAR_CONFIG } from '@rx-angular/cdk';
import { MovieListPageComponent } from './pages/movie-list-page/movie-list-page.component';

@NgModule({
  declarations: [MovieListPageComponent],
  imports: [AppModule, ServerModule, ServerTransferStateModule],
  providers: [
    {
      provide: RX_ANGULAR_CONFIG,
      useValue: {
        primaryStrategy: 'native',
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
