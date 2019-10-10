// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.UserDefineRegionEntity
export interface UserDefineRegionEntity {
	RegionId: string;
	BelongRegion: string;
	DebugEnable: boolean;
	UserId: string;
	Id: number;
	RegionName: string;
	Description: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.UserDefineRegionList
export interface UserDefineRegionList {
	UserDefineRegionEntity: UserDefineRegionEntity[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.ListUserDefineRegionResponse
export interface ListUserDefineRegionResponse {
	Code: number;
	Message: string;
	RequestId: string;
	UserDefineRegionList: UserDefineRegionList;
}

