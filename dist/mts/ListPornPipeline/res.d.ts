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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.PipelineInListPornPipeline
export interface PipelineInListPornPipeline {
	Id: string;
	Name: string;
	State: string;
	Priority: string;
	NotifyConfig: NotifyConfig;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.PipelineListInListPornPipeline
export interface PipelineListInListPornPipeline {
	Pipeline: PipelineInListPornPipeline[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.ListPornPipelineResponse
export interface ListPornPipelineResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	PipelineList: PipelineListInListPornPipeline;
}

