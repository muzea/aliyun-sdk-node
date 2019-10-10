// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.Cluster
export interface Cluster {
	ClusterId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.Clusters
export interface Clusters {
	Cluster: Cluster[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DescribeClustersResponse
export interface DescribeClustersResponse {
	RequestId: string;
	Clusters: Clusters;
}

