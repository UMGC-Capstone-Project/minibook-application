/* eslint-disable quote-props */
/* eslint-disable @typescript-eslint/naming-convention */
import { environment } from 'src/environments/environment';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { Camera, CameraPhoto, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Storage } from '@capacitor/storage';
import { IPhoto } from '../common/interfaces/photo.interface';
import { HttpClient } from '@angular/common/http';
import {decode} from 'base64-arraybuffer';
import { AuthStoreService } from '../pages/auth/services/auth-store.service';
// TODO: clean up all this later!!! maybe?!
@Injectable({
	providedIn: 'root'
})
export class PhotoService {
	public photos: IPhoto[] = [];
	apiUrl = environment.apiUrl;
	constructor(private apiService: ApiService, private readonly httpClient: HttpClient, private authStorageService: AuthStoreService) { }

	public async addNewToGallery() {
		// Take a photo
		const capturedPhoto = await Camera.getPhoto({
			resultType: CameraResultType.Uri,
			source: CameraSource.Camera,
			quality: 100
		});
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		const response = await fetch(capturedPhoto.webPath!);
		const blob = await response.blob();
		const formData = new FormData();
		formData.append('file', blob);
		const token = localStorage.getItem('auth_token').replace(/["]/g, '');
		console.log(token);
		this.httpClient.post(`${environment.apiUrl}/users/avatar`, formData, {
			headers: {
				'Authorization': `Bearer ${token}`
			}
		}).subscribe(result=> {
			console.log(result);
		});

		this.photos.unshift({
			filepath: 'soon...',
			webviewPath: capturedPhoto.webPath
		});
	}

	private async readAsBase64(cameraPhoto: Photo) {
		// Fetch the photo, read as a blob, then convert to base64 format
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		const response = await fetch(cameraPhoto.webPath!);
		const blob = await response.blob();

		return await this.convertBlobToBase64(blob) as string;
	}

	// eslint-disable-next-line @typescript-eslint/member-ordering
	convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onerror = reject;
		reader.onload = () => {
			resolve(reader.result);
		};
		reader.readAsDataURL(blob);
	});

	// eslint-disable-next-line @typescript-eslint/member-ordering
	dataURLtoFile(dataurl, filename) {
        const arr = dataurl.split(',');
            const mime = arr[0].match(/:(.*?);/)[1];
            const bstr = atob(arr[1]);
            let n = bstr.length;
            const u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, {type: mime});
    }
}
