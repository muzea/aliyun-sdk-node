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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.PipelineInListTerrorismPipeline
export interface PipelineInListTerrorismPipeline {
	Id: string;
	Name: string;
	State: string;
	Priority: string;
	NotifyConfig: NotifyConfig;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.PipelineListInListTerrorismPipeline
export interface PipelineListInListTerrorismPipeline {
	Pipeline: PipelineInListTerrorismPipeline[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.ListTerrorismPipelineResponse
export interface ListTerrorismPipelineResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	PipelineList: PipelineListInListTerrorismPipeline;
}

