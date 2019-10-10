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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.PipelineInAddCoverPipeline
export interface PipelineInAddCoverPipeline {
	Id: string;
	Name: string;
	Priority: string;
	State: string;
	Role: string;
	NotifyConfig: NotifyConfig;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.AddCoverPipelineResponse
export interface AddCoverPipelineResponse {
	RequestId: string;
	Pipeline: PipelineInAddCoverPipeline;
}

