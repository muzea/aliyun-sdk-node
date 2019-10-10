// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.AppInfo
export interface AppInfo {
	AppId: string;
	ModificationTime: string;
	CreationTime: string;
	Status: string;
	AppName: string;
	Description: string;
	Type: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.GetAppInfosResponse
export interface GetAppInfosResponse {
	RequestId: string;
	NonExistAppIds: string[];
	AppInfoList: AppInfo[];
}

