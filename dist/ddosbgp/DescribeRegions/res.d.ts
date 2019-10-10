// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ddosbgp.Region
export interface Region {
	RegionEnName: string;
	RegionName: string;
	RegionId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ddosbgp.DescribeRegionsResponse
export interface DescribeRegionsResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Regions: Region[];
}

