// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/foas.Queue
export interface Queue {
	ClusterId: string;
	QueueName: string;
	UsedVCore: number;
	MinGpu: number;
	UsedMem: number;
	MaxVCore: number;
	MaxMem: number;
	MaxGpu: number;
	UsedGpu: number;
	MinMem: number;
	MinVCore: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/foas.QueuesInListProjectBindQueueResource
export interface QueuesInListProjectBindQueueResource {
	Queue: Queue[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/foas.ListProjectBindQueueResourceResponse
export interface ListProjectBindQueueResourceResponse {
	RequestId: string;
	Queues: QueuesInListProjectBindQueueResource;
}

