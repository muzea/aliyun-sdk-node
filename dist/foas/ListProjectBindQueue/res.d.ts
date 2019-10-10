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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/foas.QueuesInListProjectBindQueue
export interface QueuesInListProjectBindQueue {
	Queue: Queue[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/foas.ListProjectBindQueueResponse
export interface ListProjectBindQueueResponse {
	RequestId: string;
	Queues: QueuesInListProjectBindQueue;
}

