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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.Pipeline
export interface Pipeline {
	Name: string;
	SpeedLevel: number;
	State: string;
	Priority: number;
	Role: string;
	Speed: string;
	QuotaAllocate: number;
	Id: string;
	NotifyConfig: NotifyConfig;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.UpdatePornPipelineResponse
export interface UpdatePornPipelineResponse {
	RequestId: string;
	Pipeline: Pipeline;
}

