// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.InstanceRenewAttribute
export interface InstanceRenewAttribute {
	InstanceId: string;
	AutoRenewEnabled: boolean;
	Duration: number;
	PeriodUnit: string;
	RenewalStatus: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.InstanceRenewAttributes
export interface InstanceRenewAttributes {
	InstanceRenewAttribute: InstanceRenewAttribute[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DescribeInstanceAutoRenewAttributeResponse
export interface DescribeInstanceAutoRenewAttributeResponse {
	RequestId: string;
	PageNumber: number;
	PageSize: number;
	TotalCount: number;
	InstanceRenewAttributes: InstanceRenewAttributes;
}

