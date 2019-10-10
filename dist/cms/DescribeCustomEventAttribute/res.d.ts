// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.CustomEvent
export interface CustomEvent {
	Id: string;
	Content: string;
	GroupId: string;
	Name: string;
	Time: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.CustomEvents
export interface CustomEvents {
	CustomEvent: CustomEvent[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.DescribeCustomEventAttributeResponse
export interface DescribeCustomEventAttributeResponse {
	Code: string;
	Message: string;
	RequestId: string;
	Success: string;
	CustomEvents: CustomEvents;
}

