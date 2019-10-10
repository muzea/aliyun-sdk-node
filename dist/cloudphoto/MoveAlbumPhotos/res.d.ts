// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudphoto.Result
export interface Result {
	AccessUrl: string;
	FramedPhotoUrl: string;
	IdStr: string;
	Message: string;
	PhotoIdStr: string;
	State: string;
	Code: string;
	Mtime: number;
	Id: number;
	ThumbnailUrl: string;
	DownloadUrl: string;
	PhotoId: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudphoto.MoveAlbumPhotosResponse
export interface MoveAlbumPhotosResponse {
	Code: string;
	Message: string;
	RequestId: string;
	Action: string;
	Results: Result[];
}

