// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DedicatedHostRenewAttribute
export interface DedicatedHostRenewAttribute {
	DedicatedHostId: string;
	AutoRenewEnabled: boolean;
	Duration: number;
	PeriodUnit: string;
	RenewalStatus: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DedicatedHostRenewAttributes
export interface DedicatedHostRenewAttributes {
	DedicatedHostRenewAttribute: DedicatedHostRenewAttribute[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DescribeDedicatedHostAutoRenewResponse
export interface DescribeDedicatedHostAutoRenewResponse {
	RequestId: string;
	DedicatedHostRenewAttributes: DedicatedHostRenewAttributes;
}

