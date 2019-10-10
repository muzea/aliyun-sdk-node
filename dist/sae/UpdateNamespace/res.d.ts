// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/sae.RealTimeRes
export interface RealTimeRes {
	Cpu: number;
	Memory: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/sae.Summary
export interface Summary {
	Cpu: number;
	Memory: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/sae.ChangeOrder
export interface ChangeOrder {
	AppId: string;
	BatchCount: number;
	BatchType: string;
	ChangeOrderId: string;
	CoType: string;
	CoTypeCode: string;
	CreateTime: string;
	Description: string;
	FinishTime: string;
	GroupId: string;
	Pipelines: string;
	Source: string;
	Status: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/sae.Namespace
export interface Namespace {
	AccessKey: string;
	AddressServerHost: string;
	SecretKey: string;
	TenantId: string;
	RegionId: string;
	NamespaceId: string;
	NamespaceName: string;
	NamespaceDescription: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/sae.Pipeline
export interface Pipeline {
	BatchType: number;
	ParallelCount: number;
	PipelineId: string;
	PipelineName: string;
	StartTime: number;
	Status: number;
	UpdateTime: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/sae.InternetItem
export interface InternetItem {
	Port: number;
	Protocol: string;
	TargetPort: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/sae.IntranetItem
export interface IntranetItem {
	Port: number;
	Protocol: string;
	TargetPort: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/sae.Instance
export interface Instance {
	GroupId: string;
	InstanceId: string;
	InstanceContainerStatus: string;
	InstanceContainerIp: string;
	CreateTimeStamp: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/sae.Application
export interface Application {
	AppDeletingStatus: boolean;
	AppId: string;
	AppName: string;
	RegionId: string;
	RunningInstances: number;
	Instances: number;
	NamespaceId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/sae.Data
export interface Data {
	PackageType: string;
	LastChangeOrderRunning: boolean;
	Logo: string;
	RunningInstances: number;
	CoType: string;
	CoTypeCode: string;
	CurrentPipelineId: string;
	LastChangeOrderId: string;
	EdasContainerVersion: string;
	ImageUrl: string;
	LastChangeOrderStatus: string;
	VpcId: string;
	IntranetIp: string;
	NamespaceDescription: string;
	BatchWaitTime: number;
	RepoId: number;
	CrUrl: string;
	SupportRollback: boolean;
	JarStartArgs: string;
	Jdk: string;
	CurrentStatus: string;
	BatchCount: number;
	Command: string;
	AppId: string;
	JarStartOptions: string;
	Envs: string;
	Cpu: number;
	ArmsApmInfo: string;
	RepoType: string;
	RepoTag: string;
	TotalSize: number;
	ChangeOrderId: string;
	BatchType: string;
	ErrorMessage: string;
	WebContainer: string;
	Auto: boolean;
	RepoOriginType: string;
	CreateTime: string;
	CommandArgs: string;
	MinReadyInstances: number;
	PageSize: number;
	PackageVersion: string;
	AppDescription: string;
	RegionId: string;
	Replicas: number;
	PipelineId: string;
	SupportAbortFreeze: boolean;
	Description: string;
	CustomHostAlias: string;
	NamespaceName: string;
	Status: number;
	InternetIp: string;
	Memory: number;
	VSwitchId: string;
	RepoNamespace: string;
	Liveness: string;
	Readiness: string;
	RepoName: string;
	CurrentPage: number;
	ArmsAdvancedEnabled: string;
	NamespaceId: string;
	AppName: string;
	PackageUrl: string;
	CoTargets: string[];
	RealTimeRes: RealTimeRes;
	Summary: Summary;
	ChangeOrderList: ChangeOrder[];
	Namespaces: Namespace[];
	Pipelines: Pipeline[];
	Internet: InternetItem[];
	Intranet: IntranetItem[];
	Instances: Instance[];
	Applications: Application[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/sae.UpdateNamespaceResponse
export interface UpdateNamespaceResponse {
	RequestId: string;
	Code: string;
	ErrorCode: string;
	Message: string;
	Success: boolean;
	TraceId: string;
	Data: Data;
}

