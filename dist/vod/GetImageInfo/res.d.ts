// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.Mezzanine
export interface Mezzanine {
	FileSize: string;
	FileURL: string;
	Width: number;
	Height: number;
	OriginalFileName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.ImageInfo
export interface ImageInfo {
	ImageId: string;
	Title: string;
	CreationTime: string;
	ImageType: string;
	Tags: string;
	URL: string;
	CateId: number;
	CateName: string;
	Description: string;
	StorageLocation: string;
	Status: string;
	AppId: string;
	RegionId: string;
	Mezzanine: Mezzanine;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.GetImageInfoResponse
export interface GetImageInfoResponse {
	RequestId: string;
	ImageInfo: ImageInfo;
}

