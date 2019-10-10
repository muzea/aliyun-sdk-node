// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/pvtz.Region
export interface Region {
	RegionId: string;
	RegionName: string;
	LocalName: string;
	RegionEndpoint: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/pvtz.Regions
export interface Regions {
	Region: Region[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/pvtz.DescribeRegionsResponse
export interface DescribeRegionsResponse {
	RequestId: string;
	Regions: Regions;
}

