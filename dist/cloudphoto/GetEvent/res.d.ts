// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudphoto.Event
export interface Event {
	IdStr: string;
	Ctime: number;
	Title: string;
	SplashPhotoId: string;
	Id: number;
	BannerPhotoId: string;
	WeixinTitle: string;
	Identity: string;
	State: string;
	EndAt: number;
	Mtime: number;
	ViewsCount: number;
	LibraryId: string;
	WatermarkPhotoId: string;
	StartAt: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudphoto.GetEventResponse
export interface GetEventResponse {
	Code: string;
	Message: string;
	RequestId: string;
	Action: string;
	Event: Event;
}

