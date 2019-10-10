// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.CustomEventCount
export interface CustomEventCount {
	Name: string;
	Num: number;
	Time: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.CustomEventCounts
export interface CustomEventCounts {
	CustomEventCount: CustomEventCount[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.DescribeCustomEventCountResponse
export interface DescribeCustomEventCountResponse {
	Code: string;
	Message: string;
	RequestId: string;
	Success: boolean;
	CustomEventCounts: CustomEventCounts;
}

