// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.FailureTopicsInCreateTopicRouteTable
export interface FailureTopicsInCreateTopicRouteTable {
	Topic: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.CreateTopicRouteTableResponse
export interface CreateTopicRouteTableResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	IsAllSucceed: boolean;
	ErrorMessage: string;
	FailureTopics: FailureTopicsInCreateTopicRouteTable;
}

