import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './user.service';
import { StorageService } from './storage.service';
import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { DatePicker } from '@ionic-native/date-picker/ngx';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [ UserService, StorageService, DocumentViewer,File, FileTransfer, PhotoViewer,SocialSharing,DatePicker]
})
export class ModelModule { }
