import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Storage } from '@capacitor/storage';
import { IPhoto } from '../common/interfaces/photo.interface';

@Injectable({
	providedIn: 'root'
})
export class PhotoService {
	public photos: IPhoto[] = [];

	constructor() {}

	public async addNewToGallery() {
		// Take a photo
		const capturedPhoto = await Camera.getPhoto({
			resultType: CameraResultType.Uri,
			source: CameraSource.Camera,
			quality: 100
		});

		this.photos.unshift({
			filepath: 'soon...',
			webviewPath: capturedPhoto.webPath
		});
	}
}
