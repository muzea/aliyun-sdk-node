// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudphoto.Photo
export interface Photo {
	FileId: string;
	IdStr: string;
	Ctime: number;
	Title: string;
	Remark: string;
	Like: number;
	Id: number;
	InactiveTime: number;
	ShareExpireTime: number;
	Location: string;
	Height: number;
	IsVideo: boolean;
	State: string;
	Mtime: number;
	Md5: string;
	Width: number;
	Size: number;
	TakenAt: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudphoto.FetchPhotosResponse
export interface FetchPhotosResponse {
	Code: string;
	Message: string;
	TotalCount: number;
	RequestId: string;
	Action: string;
	Photos: Photo[];
}

