// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.Disk
export interface Disk {
	MountPath: string;
	Device: string;
	DiskType: string;
	DiskSize: number;
	DiskId: string;
	DiskDevice: string;
	Type: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.DiskListInListClusterHost
export interface DiskListInListClusterHost {
	Disk: Disk[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.Host
export interface Host {
	HostId: string;
	PublicIp: string;
	ChargeType: string;
	CreateTime: string;
	InstanceType: string;
	EndTime: number;
	SerialNumber: string;
	StartTime: number;
	Role: string;
	PrivateIp: string;
	InstanceStatus: string;
	ExpiredTime: number;
	Type: string;
	Message: string;
	HostInstanceId: string;
	Data: string;
	Memory: number;
	EmrExpiredTime: string;
	State: string;
	ZoneId: string;
	HostName: string;
	Cpu: number;
	Status: string;
	SupportIpV6: boolean;
	HostGroupId: string;
	DiskList: DiskListInListClusterHost;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.HostListInListFlowClusterAllHosts
export interface HostListInListFlowClusterAllHosts {
	Host: Host[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ListFlowClusterAllHostsResponse
export interface ListFlowClusterAllHostsResponse {
	RequestId: string;
	HostList: HostListInListFlowClusterAllHosts;
}

