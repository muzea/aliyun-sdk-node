// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.Special
export interface Special {
	SpecialKey: string;
	TrafficValue: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.Specials
export interface Specials {
	Special: Special[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.SpecialPolicy
export interface SpecialPolicy {
	SpecialType: string;
	Specials: Specials;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.SpecialPolicies
export interface SpecialPolicies {
	SpecialPolicy: SpecialPolicy[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.TrafficControl
export interface TrafficControl {
	TrafficControlId: string;
	TrafficControlName: string;
	Description: string;
	TrafficControlUnit: string;
	ApiDefault: number;
	UserDefault: number;
	AppDefault: number;
	CreatedTime: string;
	ModifiedTime: string;
	SpecialPolicies: SpecialPolicies;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.TrafficControls
export interface TrafficControls {
	TrafficControl: TrafficControl[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.DescribeTrafficControlsResponse
export interface DescribeTrafficControlsResponse {
	RequestId: string;
	TotalCount: number;
	PageSize: number;
	PageNumber: number;
	TrafficControls: TrafficControls;
}

