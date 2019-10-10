// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.NonExistIdsInQueryCensorPipelineList
export interface NonExistIdsInQueryCensorPipelineList {
	String: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.NotifyConfig
export interface NotifyConfig {
	QueueName: string;
	MqTag: string;
	Queue: string;
	MqTopic: string;
	Topic: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.PipelineInQueryCensorPipelineList
export interface PipelineInQueryCensorPipelineList {
	Id: string;
	Name: string;
	State: string;
	Priority: string;
	NotifyConfig: NotifyConfig;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.PipelineListInQueryCensorPipelineList
export interface PipelineListInQueryCensorPipelineList {
	Pipeline: PipelineInQueryCensorPipelineList[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.QueryCensorPipelineListResponse
export interface QueryCensorPipelineListResponse {
	RequestId: string;
	NonExistIds: NonExistIdsInQueryCensorPipelineList;
	PipelineList: PipelineListInQueryCensorPipelineList;
}

