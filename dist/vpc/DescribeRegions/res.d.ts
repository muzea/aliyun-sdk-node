// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.Region
export interface Region {
	RegionId: string;
	LocalName: string;
	RegionEndpoint: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.Regions
export interface Regions {
	Region: Region[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.DescribeRegionsResponse
export interface DescribeRegionsResponse {
	RequestId: string;
	Regions: Regions;
}

