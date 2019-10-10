// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudphoto.AutoCleanConfig
export interface AutoCleanConfig {
	AutoCleanEnabled: boolean;
	AutoCleanDays: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudphoto.Quota
export interface Quota {
	TotalTrashQuota: number;
	ActiveSize: number;
	UsedQuota: number;
	InactiveSize: number;
	PhotosCount: number;
	FacesCount: number;
	VideosCount: number;
	TotalQuota: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudphoto.Library
export interface Library {
	Ctime: number;
	LibraryId: string;
	AutoCleanConfig: AutoCleanConfig;
	Quota: Quota;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudphoto.GetLibraryResponse
export interface GetLibraryResponse {
	Code: string;
	Message: string;
	RequestId: string;
	Action: string;
	Library: Library;
}

