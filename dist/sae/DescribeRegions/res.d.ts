// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/sae.Region
export interface Region {
	RegionId: string;
	RegionEndpoint: string;
	LocalName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/sae.Regions
export interface Regions {
	Region: Region[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/sae.DescribeRegionsResponse
export interface DescribeRegionsResponse {
	RequestId: string;
	Code: number;
	Message: string;
	Regions: Regions;
}

