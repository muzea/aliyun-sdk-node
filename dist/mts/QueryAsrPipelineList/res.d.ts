// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.NonExistIdsInQueryAsrPipelineList
export interface NonExistIdsInQueryAsrPipelineList {
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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.PipelineInQueryAsrPipelineList
export interface PipelineInQueryAsrPipelineList {
	Id: string;
	Name: string;
	State: string;
	Priority: string;
	NotifyConfig: NotifyConfig;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.PipelineListInQueryAsrPipelineList
export interface PipelineListInQueryAsrPipelineList {
	Pipeline: PipelineInQueryAsrPipelineList[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.QueryAsrPipelineListResponse
export interface QueryAsrPipelineListResponse {
	RequestId: string;
	NonExistIds: NonExistIdsInQueryAsrPipelineList;
	PipelineList: PipelineListInQueryAsrPipelineList;
}

