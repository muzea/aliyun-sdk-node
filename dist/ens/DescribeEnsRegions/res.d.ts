// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ens.EnsRegionsItem
export interface EnsRegionsItem {
	EnsRegionId: string;
	Name: string;
	EnName: string;
	Area: string;
	Province: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ens.EnsRegions
export interface EnsRegions {
	EnsRegionsItem: EnsRegionsItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ens.DescribeEnsRegionsResponse
export interface DescribeEnsRegionsResponse {
	RequestId: string;
	Code: number;
	EnsRegions: EnsRegions;
}

