// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.DstTopics
export interface DstTopics {
	Topic: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.QueryTopicRouteTableResponse
export interface QueryTopicRouteTableResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	ErrorMessage: string;
	DstTopics: DstTopics;
}

