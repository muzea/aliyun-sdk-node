// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.FailureTopicsInDeleteTopicRouteTable
export interface FailureTopicsInDeleteTopicRouteTable {
	Topic: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.DeleteTopicRouteTableResponse
export interface DeleteTopicRouteTableResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	IsAllSucceed: boolean;
	ErrorMessage: string;
	FailureTopics: FailureTopicsInDeleteTopicRouteTable;
}

