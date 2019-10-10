// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ddosbgp.PackPaidTraffic
export interface PackPaidTraffic {
	InstanceId: string;
	StartTime: number;
	BaseBandwidth: number;
	ElasticBandwidth: number;
	PaidCapacity: number;
	TotalCapacity: number;
	MaxAttack: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ddosbgp.DescribePackPaidTrafficResponse
export interface DescribePackPaidTrafficResponse {
	RequestId: string;
	TotalCount: number;
	PackPaidTraffics: PackPaidTraffic[];
}

