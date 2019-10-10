// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dm.RegionList
export interface RegionList {
	Region: string;
	RegionDesc: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dm.DataInGetRegionList
export interface DataInGetRegionList {
	regionList: RegionList[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dm.GetRegionListResponse
export interface GetRegionListResponse {
	RequestId: string;
	Total: number;
	PageNo: number;
	PageSize: number;
	data: DataInGetRegionList;
}

