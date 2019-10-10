// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.RegionEntity
export interface RegionEntity {
	Name: string;
	RegionNo: string;
	Id: string;
	RegionName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.RegionEntityListInListAliyunRegion
export interface RegionEntityListInListAliyunRegion {
	RegionEntity: RegionEntity[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.ListAliyunRegionResponse
export interface ListAliyunRegionResponse {
	Code: number;
	Message: string;
	RequestId: string;
	RegionEntityList: RegionEntityListInListAliyunRegion;
}

