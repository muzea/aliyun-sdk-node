// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.Manager
export interface Manager {
	Count: number;
	InstanceType: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.Compute
export interface Compute {
	Count: number;
	InstanceType: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.Login
export interface Login {
	Count: number;
	InstanceType: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.EcsInfo
export interface EcsInfo {
	Manager: Manager;
	Compute: Compute;
	Login: Login;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.ApplicationInfo
export interface ApplicationInfo {
	Name: string;
	Tag: string;
	Version: string;
	Required: boolean;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.ApplicationsInDescribeCluster
export interface ApplicationsInDescribeCluster {
	ApplicationInfo: ApplicationInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.PostInstallScriptInfo
export interface PostInstallScriptInfo {
	Url: string;
	Args: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.PostInstallScripts
export interface PostInstallScripts {
	PostInstallScriptInfo: PostInstallScriptInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.ClusterInfo
export interface ClusterInfo {
	Id: string;
	RegionId: string;
	Name: string;
	Description: string;
	Status: string;
	OsTag: string;
	AccountType: string;
	SchedulerType: string;
	CreateTime: string;
	SecurityGroupId: string;
	VpcId: string;
	VSwitchId: string;
	VolumeType: string;
	VolumeId: string;
	VolumeProtocol: string;
	VolumeMountpoint: string;
	RemoteDirectory: string;
	DeployMode: string;
	HaEnable: boolean;
	EcsChargeType: string;
	KeyPairName: string;
	SccClusterId: string;
	ClientVersion: string;
	ImageOwnerAlias: string;
	ImageId: string;
	Location: string;
	EcsInfo: EcsInfo;
	Applications: ApplicationsInDescribeCluster;
	PostInstallScripts: PostInstallScripts;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.DescribeClusterResponse
export interface DescribeClusterResponse {
	RequestId: string;
	ClusterInfo: ClusterInfo;
}

