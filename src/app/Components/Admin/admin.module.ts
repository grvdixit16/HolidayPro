import { NgModule } from '@angular/core';
import { UserDetailComponent } from './user/user-detail.component';
import { UserListComponent } from './user/user-list.component';

@NgModule({
    imports: [],
    exports: [UserListComponent],
    declarations: [UserDetailComponent, UserListComponent],
    providers: []

})
export class AdminModule { }