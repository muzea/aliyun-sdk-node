// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.NonExistIdsInQueryTerrorismPipelineList
export interface NonExistIdsInQueryTerrorismPipelineList {
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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.PipelineInQueryTerrorismPipelineList
export interface PipelineInQueryTerrorismPipelineList {
	Id: string;
	Name: string;
	State: string;
	Priority: string;
	NotifyConfig: NotifyConfig;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.PipelineListInQueryTerrorismPipelineList
export interface PipelineListInQueryTerrorismPipelineList {
	Pipeline: PipelineInQueryTerrorismPipelineList[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.QueryTerrorismPipelineListResponse
export interface QueryTerrorismPipelineListResponse {
	RequestId: string;
	NonExistIds: NonExistIdsInQueryTerrorismPipelineList;
	PipelineList: PipelineListInQueryTerrorismPipelineList;
}

