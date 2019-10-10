// this file was automatically generated, DO NOT EDIT
// structs
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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudphoto.GetQuotaResponse
export interface GetQuotaResponse {
	Code: string;
	Message: string;
	RequestId: string;
	Action: string;
	Quota: Quota;
}

