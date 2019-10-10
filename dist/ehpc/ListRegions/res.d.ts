// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.RegionInfo
export interface RegionInfo {
	RegionId: string;
	LocalName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.Regions
export interface Regions {
	RegionInfo: RegionInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.ListRegionsResponse
export interface ListRegionsResponse {
	RequestId: string;
	Regions: Regions;
}

