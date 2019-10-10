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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.PipelineInListCensorPipeline
export interface PipelineInListCensorPipeline {
	Id: string;
	Name: string;
	State: string;
	Priority: string;
	NotifyConfig: NotifyConfig;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.PipelineListInListCensorPipeline
export interface PipelineListInListCensorPipeline {
	Pipeline: PipelineInListCensorPipeline[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.ListCensorPipelineResponse
export interface ListCensorPipelineResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	PipelineList: PipelineListInListCensorPipeline;
}

