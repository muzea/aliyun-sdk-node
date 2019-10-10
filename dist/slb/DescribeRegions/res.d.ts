// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.Region
export interface Region {
	RegionId: string;
	LocalName: string;
	RegionEndpoint: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.Regions
export interface Regions {
	Region: Region[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.DescribeRegionsResponse
export interface DescribeRegionsResponse {
	RequestId: string;
	Regions: Regions;
}

