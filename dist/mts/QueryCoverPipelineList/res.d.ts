// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.NonExistIdsInQueryCoverPipelineList
export interface NonExistIdsInQueryCoverPipelineList {
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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.PipelineInQueryCoverPipelineList
export interface PipelineInQueryCoverPipelineList {
	Id: string;
	Name: string;
	State: string;
	Priority: string;
	Role: string;
	NotifyConfig: NotifyConfig;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.PipelineListInQueryCoverPipelineList
export interface PipelineListInQueryCoverPipelineList {
	Pipeline: PipelineInQueryCoverPipelineList[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.QueryCoverPipelineListResponse
export interface QueryCoverPipelineListResponse {
	RequestId: string;
	NonExistIds: NonExistIdsInQueryCoverPipelineList;
	PipelineList: PipelineListInQueryCoverPipelineList;
}

