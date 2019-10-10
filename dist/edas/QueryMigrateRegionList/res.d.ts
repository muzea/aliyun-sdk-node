// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.RegionEntity
export interface RegionEntity {
	Name: string;
	RegionNo: string;
	Id: string;
	RegionName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.RegionEntityListInQueryMigrateRegionList
export interface RegionEntityListInQueryMigrateRegionList {
	RegionEntity: RegionEntity[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.QueryMigrateRegionListResponse
export interface QueryMigrateRegionListResponse {
	Code: number;
	Message: string;
	RequestId: string;
	RegionEntityList: RegionEntityListInQueryMigrateRegionList;
}

