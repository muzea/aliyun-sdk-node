// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/foas.Cluster
export interface Cluster {
	ClusterId: string;
	RegionId: string;
	ZoneId: string;
	State: string;
	OwnerId: string;
	Operator: string;
	DisplayName: string;
	Description: string;
	GmtCreate: number;
	GmtModified: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/foas.Clusters
export interface Clusters {
	Cluster: Cluster[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/foas.ListClusterResponse
export interface ListClusterResponse {
	RequestId: string;
	TotalCount: number;
	TotalPage: number;
	PageIndex: number;
	PageSize: number;
	Clusters: Clusters;
}

