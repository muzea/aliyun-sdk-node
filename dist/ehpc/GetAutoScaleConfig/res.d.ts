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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.QueuesInGetAutoScaleConfig
export interface QueuesInGetAutoScaleConfig {
	QueueInfo: QueueInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.GetAutoScaleConfigResponse
export interface GetAutoScaleConfigResponse {
	RequestId: string;
	Uid: string;
	ClusterId: string;
	ClusterType: string;
	EnableAutoGrow: boolean;
	EnableAutoShrink: boolean;
	GrowIntervalInMinutes: number;
	ShrinkIntervalInMinutes: number;
	ShrinkIdleTimes: number;
	GrowTimeoutInMinutes: number;
	ExtraNodesGrowRatio: number;
	GrowRatio: number;
	MaxNodesInCluster: number;
	ExcludeNodes: string;
	SpotStrategy: string;
	SpotPriceLimit: number;
	Queues: QueuesInGetAutoScaleConfig;
}

