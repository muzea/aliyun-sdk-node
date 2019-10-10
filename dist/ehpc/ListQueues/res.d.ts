// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.InstanceTypeInfo
export interface InstanceTypeInfo {
	InstanceType: string;
	SpotStrategy: string;
	SpotPriceLimit: number;
	ZoneId: string;
	VSwitchId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.InstanceTypes
export interface InstanceTypes {
	InstanceTypeInfo: InstanceTypeInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.QueueInfo
export interface QueueInfo {
	QueueName: string;
	SpotPriceLimit: number;
	EnableAutoGrow: boolean;
	EnableAutoShrink: boolean;
	InstanceType: string;
	SpotStrategy: string;
	Type: string;
	InstanceTypes: InstanceTypes;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.QueuesInListQueues
export interface QueuesInListQueues {
	QueueInfo: QueueInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.ListQueuesResponse
export interface ListQueuesResponse {
	RequestId: string;
	Queues: QueuesInListQueues;
}

