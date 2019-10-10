// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.DaemonInfo
export interface DaemonInfo {
	Name: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.DaemonInfos
export interface DaemonInfos {
	DaemonInfo: DaemonInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.DiskInfo
export interface DiskInfo {
	Device: string;
	DiskName: string;
	DiskId: string;
	Type: string;
	Size: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.DiskInfos
export interface DiskInfos {
	DiskInfo: DiskInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.Node
export interface Node {
	ZoneId: string;
	InstanceId: string;
	Status: string;
	PubIp: string;
	InnerIp: string;
	ExpiredTime: string;
	CreateTime: string;
	EmrExpiredTime: string;
	SupportIpV6: boolean;
	DaemonInfos: DaemonInfos;
	DiskInfos: DiskInfos;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.Nodes
export interface Nodes {
	Node: Node[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.HostGroup
export interface HostGroup {
	HostGroupType: string;
	LockReason: string;
	MemoryCapacity: number;
	HostGroupSubType: string;
	SecurityGroupId: string;
	CpuCore: number;
	SystemDiskCount: number;
	ChargeType: string;
	SysDiskCapacity: number;
	SystemDiskSize: number;
	InstanceType: string;
	DataDiskSize: number;
	HostGroupChangeStatus: string;
	NodeCount: number;
	gmtModified: string;
	DiskCount: number;
	Comment: string;
	VswitchId: string;
	HostGroupName: string;
	DiskCapacity: number;
	BandWidth: string;
	Memory: number;
	DiskType: string;
	PayType: string;
	LockType: string;
	MultiInstanceTypes: string;
	Period: string;
	gmtCreate: string;
	DataDiskType: string;
	SysDiskType: string;
	Cpu: number;
	Status: string;
	HostGroupChangeType: string;
	HostGroupId: string;
	DataDiskCount: number;
	SystemDiskType: string;
	Nodes: Nodes;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.HostGroupListInListClusterHostGroup
export interface HostGroupListInListClusterHostGroup {
	HostGroup: HostGroup[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ListClusterHostGroupResponse
export interface ListClusterHostGroupResponse {
	RequestId: string;
	PageNumber: number;
	PageSize: number;
	Total: number;
	ClusterId: string;
	HostGroupList: HostGroupListInListClusterHostGroup;
}

