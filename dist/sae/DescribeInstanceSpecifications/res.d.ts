// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/sae.DataItemInDescribeInstanceSpecifications
export interface DataItemInDescribeInstanceSpecifications {
	Cpu: number;
	Enable: boolean;
	Id: number;
	Memory: number;
	SpecInfo: string;
	Version: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/sae.DescribeInstanceSpecificationsResponse
export interface DescribeInstanceSpecificationsResponse {
	RequestId: string;
	Code: string;
	Message: string;
	Success: boolean;
	ErrorCode: string;
	TraceId: string;
	Data: DataItemInDescribeInstanceSpecifications[];
}

