// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.NotifyConfig
export interface NotifyConfig {
	QueueName: string;
	MqTag: string;
	Queue: string;
	MqTopic: string;
	Topic: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.PipelineInListAsrPipeline
export interface PipelineInListAsrPipeline {
	Id: string;
	Name: string;
	State: string;
	Priority: string;
	NotifyConfig: NotifyConfig;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.PipelineListInListAsrPipeline
export interface PipelineListInListAsrPipeline {
	Pipeline: PipelineInListAsrPipeline[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.ListAsrPipelineResponse
export interface ListAsrPipelineResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	PipelineList: PipelineListInListAsrPipeline;
}

