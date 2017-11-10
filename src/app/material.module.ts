import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { MatToolbarModule,
         MatCardModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule } from '@angular/material';

@NgModule({
  imports: [MatToolbarModule,
            MatCardModule,
            MatButtonModule,
            MatInputModule,
            MatFormFieldModule],
  exports: [MatToolbarModule,
            MatCardModule,
            MatButtonModule,
            MatInputModule,
            MatFormFieldModule],
})
export class MyMaterialModule { }

