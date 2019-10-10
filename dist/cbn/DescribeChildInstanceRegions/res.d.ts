// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cbn.Region
export interface Region {
	RegionId: string;
	LocalName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cbn.Regions
export interface Regions {
	Region: Region[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cbn.DescribeChildInstanceRegionsResponse
export interface DescribeChildInstanceRegionsResponse {
	RequestId: string;
	Regions: Regions;
}

