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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudphoto.ResultsInGetDownloadUrls
export interface ResultsInGetDownloadUrls {
	Result: Result[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudphoto.GetDownloadUrlsResponse
export interface GetDownloadUrlsResponse {
	Code: string;
	Message: string;
	RequestId: string;
	Action: string;
	Results: ResultsInGetDownloadUrls;
}
