// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.Application
export interface Application {
	Name: string;
	ClusterId: string;
	ApplicationId: string;
	Port: number;
	Email: string;
	Memory: number;
	LaunchTime: number;
	Owner: string;
	CreateTime: number;
	Dockerize: boolean;
	BuildPackageId: number;
	InstanceCount: number;
	RegionId: string;
	HealthCheckUrl: string;
	UserId: string;
	Cpu: number;
	Phone: string;
	RunningInstanceCount: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.Ecu
export interface Ecu {
	EcuId: string;
	Online: boolean;
	DockerEnv: boolean;
	CreateTime: number;
	UpdateTime: number;
	IpAddr: string;
	HeartbeatTime: number;
	UserId: string;
	GroupId: string;
	Name: string;
	ZoneId: string;
	RegionId: string;
	InstanceId: string;
	VpcId: string;
	AvailableCpu: number;
	AvailableMem: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.EcuList
export interface EcuList {
	Ecu: Ecu[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.Ecc
export interface Ecc {
	EccId: string;
	EcuId: string;
	AppId: string;
	AppState: number;
	TaskState: number;
	CreateTime: number;
	UpdateTime: number;
	Ip: string;
	VpcId: string;
	GroupId: string;
	ContainerStatus: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.EccList
export interface EccList {
	Ecc: Ecc[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.Group
export interface Group {
	GroupId: string;
	GroupName: string;
	AppId: string;
	PackageVersionId: string;
	AppVersionId: string;
	GroupType: number;
	ClusterId: string;
	CreateTime: number;
	UpdateTime: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.GroupList
export interface GroupList {
	Group: Group[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.DeployRecord
export interface DeployRecord {
	DeployRecordId: string;
	EccId: string;
	EcuId: string;
	PackageVersionId: string;
	PackageMd5: string;
	CreateTime: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.DeployRecordList
export interface DeployRecordList {
	DeployRecord: DeployRecord[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.AppInfo
export interface AppInfo {
	Application: Application;
	EcuList: EcuList;
	EccList: EccList;
	GroupList: GroupList;
	DeployRecordList: DeployRecordList;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.QueryApplicationStatusResponse
export interface QueryApplicationStatusResponse {
	Code: number;
	Message: string;
	RequestId: string;
	AppInfo: AppInfo;
}

