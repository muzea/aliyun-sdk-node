// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/nas.DescribeRegionsRegion1
export interface DescribeRegionsRegion1 {
	RegionId: string;
	LocalName: string;
	RegionEndpoint: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/nas.DescribeRegionsRegions0
export interface DescribeRegionsRegions0 {
	Region: DescribeRegionsRegion1[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/nas.DescribeRegionsResponse
export interface DescribeRegionsResponse {
	RequestId: string;
	TotalCount: number;
	PageSize: number;
	PageNumber: number;
	Regions: DescribeRegionsRegions0;
}

