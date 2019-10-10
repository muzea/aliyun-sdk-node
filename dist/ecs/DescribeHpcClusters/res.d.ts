// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.HpcCluster
export interface HpcCluster {
	HpcClusterId: string;
	Name: string;
	Description: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.HpcClusters
export interface HpcClusters {
	HpcCluster: HpcCluster[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DescribeHpcClustersResponse
export interface DescribeHpcClustersResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	HpcClusters: HpcClusters;
}

