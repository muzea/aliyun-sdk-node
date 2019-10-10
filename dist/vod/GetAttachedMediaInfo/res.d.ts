// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.Category
export interface Category {
	CateName: string;
	Level: number;
	SubTotal: number;
	ParentId: number;
	CateId: number;
	Type: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.AttachedMedia
export interface AttachedMedia {
	Tags: string;
	Title: string;
	ModificationTime: string;
	CreationTime: string;
	Icon: string;
	URL: string;
	AppId: string;
	RegionId: string;
	FileSize: number;
	StorageLocation: number;
	Status: string;
	MediaId: string;
	Description: string;
	OnlineStatus: string;
	Type: string;
	Categories: Category[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.GetAttachedMediaInfoResponse
export interface GetAttachedMediaInfoResponse {
	RequestId: string;
	NonExistMediaIds: string[];
	AttachedMediaList: AttachedMedia[];
}

