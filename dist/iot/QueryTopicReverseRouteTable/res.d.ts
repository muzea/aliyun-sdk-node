// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.SrcTopics
export interface SrcTopics {
	Topic: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.QueryTopicReverseRouteTableResponse
export interface QueryTopicReverseRouteTableResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	ErrorMessage: string;
	SrcTopics: SrcTopics;
}

