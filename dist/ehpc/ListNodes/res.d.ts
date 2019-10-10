// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.RolesInListNodesNoPaging
export interface RolesInListNodesNoPaging {
	Role: string[];
}

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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.NodeInfo
export interface NodeInfo {
	LockReason: string;
	Expired: boolean;
	ExpiredTime: string;
	ImageId: string;
	VSwitchId: string;
	Version: string;
	ImageOwnerAlias: string;
	CreateMode: string;
	Location: string;
	RegionId: string;
	ZoneId: string;
	CreatedByEhpc: boolean;
	Id: string;
	HostName: string;
	Status: string;
	AddTime: string;
	SpotStrategy: string;
	VpcId: string;
	Roles: RolesInListNodesNoPaging;
	TotalResources: TotalResources;
	UsedResources: UsedResources;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.NodesInListNodes
export interface NodesInListNodes {
	NodeInfo: NodeInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.ListNodesResponse
export interface ListNodesResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	Nodes: NodesInListNodes;
}

