// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/kms.Region
export interface Region {
	RegionId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/kms.Regions
export interface Regions {
	Region: Region[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/kms.DescribeRegionsResponse
export interface DescribeRegionsResponse {
	RequestId: string;
	Regions: Regions;
}

