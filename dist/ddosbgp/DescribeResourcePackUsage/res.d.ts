// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ddosbgp.PackUsage
export interface PackUsage {
	Traffic: number;
	Time: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ddosbgp.DescribeResourcePackUsageResponse
export interface DescribeResourcePackUsageResponse {
	RequestId: string;
	Interval: number;
	StartTime: number;
	EndTime: number;
	PackUsages: PackUsage[];
}

