// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.NonExistIdsInQueryPornPipelineList
export interface NonExistIdsInQueryPornPipelineList {
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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.PipelineInQueryPornPipelineList
export interface PipelineInQueryPornPipelineList {
	Id: string;
	Name: string;
	State: string;
	Priority: string;
	NotifyConfig: NotifyConfig;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.PipelineListInQueryPornPipelineList
export interface PipelineListInQueryPornPipelineList {
	Pipeline: PipelineInQueryPornPipelineList[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.QueryPornPipelineListResponse
export interface QueryPornPipelineListResponse {
	RequestId: string;
	NonExistIds: NonExistIdsInQueryPornPipelineList;
	PipelineList: PipelineListInQueryPornPipelineList;
}

