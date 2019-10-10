// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.Cluster
export interface Cluster {
	ClusterId: string;
	NodeNum: number;
	UpdateTime: number;
	Mem: number;
	CreateTime: number;
	OversoldFactor: number;
	MemUsed: number;
	NetworkMode: number;
	RegionId: string;
	ClusterName: string;
	CpuUsed: number;
	IaasProvider: string;
	ClusterType: number;
	VpcId: string;
	Cpu: number;
	Description: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.InsertClusterResponse
export interface InsertClusterResponse {
	Code: number;
	Message: string;
	RequestId: string;
	Cluster: Cluster;
}

