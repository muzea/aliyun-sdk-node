// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.TotalResources
export interface TotalResources {
	Gpu: number;
	Memory: number;
	Cpu: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.UsedResources
export interface UsedResources {
	Gpu: number;
	Memory: number;
	Cpu: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.Managers
export interface Managers {
	Total: number;
	NormalCount: number;
	OperatingCount: number;
	StoppedCount: number;
	ExceptionCount: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.Computes
export interface Computes {
	Total: number;
	NormalCount: number;
	OperatingCount: number;
	StoppedCount: number;
	ExceptionCount: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.ClusterInfoSimple
export interface ClusterInfoSimple {
	Name: string;
	Count: number;
	AccountType: string;
	VSwitchId: string;
	ImageId: string;
	ImageOwnerAlias: string;
	CreateTime: string;
	InstanceType: string;
	LoginNodes: string;
	Location: string;
	RegionId: string;
	ZoneId: string;
	OsTag: string;
	SchedulerType: string;
	EhpcVersion: string;
	Id: string;
	Status: string;
	VpcId: string;
	DeployMode: string;
	Description: string;
	TotalResources: TotalResources;
	UsedResources: UsedResources;
	Managers: Managers;
	Computes: Computes;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.ClustersInListClustersMeta
export interface ClustersInListClustersMeta {
	ClusterInfoSimple: ClusterInfoSimple[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.ListClustersMetaResponse
export interface ListClustersMetaResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	Clusters: ClustersInListClustersMeta;
}

