// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.RegionItem
export interface RegionItem {
	RegionId: string;
	ProjectTypes: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.Regions
export interface Regions {
	Region: RegionItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.DescribeRegionsResponse
export interface DescribeRegionsResponse {
	RequestId: string;
	Regions: Regions;
}

