// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.DescribeAutoScaleConfigResponse
export interface DescribeAutoScaleConfigResponse {
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
	SpotPriceLimit: string;
}

