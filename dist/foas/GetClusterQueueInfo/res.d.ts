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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/foas.QueuesInGetClusterQueueInfo
export interface QueuesInGetClusterQueueInfo {
	Queue: Queue[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/foas.GetClusterQueueInfoResponse
export interface GetClusterQueueInfoResponse {
	RequestId: string;
	Queues: QueuesInGetClusterQueueInfo;
}

