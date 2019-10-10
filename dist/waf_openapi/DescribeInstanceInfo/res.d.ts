// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/waf_openapi.InstanceInfo
export interface InstanceInfo {
	InDebt: number;
	InstanceId: string;
	PayType: number;
	EndDate: number;
	RemainDay: number;
	Region: string;
	Trial: number;
	Status: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/waf_openapi.DescribeInstanceInfoResponse
export interface DescribeInstanceInfoResponse {
	RequestId: string;
	InstanceInfo: InstanceInfo;
}

