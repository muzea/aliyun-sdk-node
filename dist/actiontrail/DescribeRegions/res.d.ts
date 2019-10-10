// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/actiontrail.RegionItem
export interface RegionItem {
	RegionId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/actiontrail.Regions
export interface Regions {
	Region: RegionItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/actiontrail.DescribeRegionsResponse
export interface DescribeRegionsResponse {
	RequestId: string;
	Regions: Regions;
}

