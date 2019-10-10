// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.RegionDefine
export interface RegionDefine {
	Id: number;
	UserId: string;
	RegionId: string;
	RegionName: string;
	Description: string;
	BelongRegion: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.DeleteUserDefineRegionResponse
export interface DeleteUserDefineRegionResponse {
	Code: number;
	Message: string;
	RequestId: string;
	RegionDefine: RegionDefine;
}

