import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { CategoryComponent } from './category/category.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { ModelModule } from '../model/model.module';
import { FormsModule } from '@angular/forms';
import { ArrayStringPipe } from '../pipes/array-string.pipe';
import { IonicModule } from '@ionic/angular';

@NgModule({
    declarations: [ MenuComponent, CategoryComponent, SubcategoryComponent, ArrayStringPipe ],
    providers:[],
    imports: [
        CommonModule,
        ModelModule,
        FormsModule,
        IonicModule
    ],
    exports:[ MenuComponent, CategoryComponent, SubcategoryComponent, ArrayStringPipe ]
})
export class SharedModule { }
