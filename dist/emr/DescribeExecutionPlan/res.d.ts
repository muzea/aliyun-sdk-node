// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.RelateClusterInfo
export interface RelateClusterInfo {
	ClusterId: string;
	ClusterName: string;
	Status: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.OrderTaskInfo
export interface OrderTaskInfo {
	TargetCount: number;
	CurrentCount: number;
	OrderIdList: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.FailReason
export interface FailReason {
	ErrorMsg: string;
	RequestId: string;
	ErrorCode: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.Software
export interface Software {
	Name: string;
	Optional: boolean;
	StartTpe: number;
	Version: string;
	OnlyDisplay: boolean;
	DisplayName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.SoftwaresInDescribeExecutionPlan
export interface SoftwaresInDescribeExecutionPlan {
	Software: Software[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.SoftwareInfo
export interface SoftwareInfo {
	ClusterType: string;
	EmrVer: string;
	Softwares: SoftwaresInDescribeExecutionPlan;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ZKLink
export interface ZKLink {
	Port: string;
	Link: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ZKLinksInDescribeClusterV2
export interface ZKLinksInDescribeClusterV2 {
	ZKLink: ZKLink[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.AccessInfo
export interface AccessInfo {
	ZKLinks: ZKLinksInDescribeClusterV2;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.HostPoolInfo
export interface HostPoolInfo {
	HpName: string;
	HpBizId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.EcsOrderInfo
export interface EcsOrderInfo {
	Index: number;
	NodeCount: number;
	InstanceType: string;
	DiskType: string;
	DiskCapacity: number;
	NodeType: string;
	DiskCount: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.EcsOrders
export interface EcsOrders {
	EcsOrderInfo: EcsOrderInfo[];
}

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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.HostGroupListInDescribeClusterV2
export interface HostGroupListInDescribeClusterV2 {
	HostGroup: HostGroup[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.BootstrapAction
export interface BootstrapAction {
	Name: string;
	Path: string;
	Arg: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.BootstrapActionListInDescribeClusterV2
export interface BootstrapActionListInDescribeClusterV2 {
	BootstrapAction: BootstrapAction[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.PropertyTypesInDescribeClusterServiceConfigForAdmin
export interface PropertyTypesInDescribeClusterServiceConfigForAdmin {
	propertyType: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.EffectWay
export interface EffectWay {
	InvokeServiceName: string;
	EffectType: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ValueEntryInfo
export interface ValueEntryInfo {
	Value: string;
	Label: string;
	Description: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.EntriesInDescribeClusterServiceConfigForAdmin
export interface EntriesInDescribeClusterServiceConfigForAdmin {
	ValueEntryInfo: ValueEntryInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.PropertyValueAttributes
export interface PropertyValueAttributes {
	Unit: string;
	Hidden: boolean;
	Maximum: string;
	Mimimum: string;
	IncrememtStep: string;
	Type: string;
	ReadOnly: boolean;
	Entries: EntriesInDescribeClusterServiceConfigForAdmin;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.PropertyInfo
export interface PropertyInfo {
	Name: string;
	Value: string;
	Component: string;
	Description: string;
	FileName: string;
	ServiceName: string;
	DisplayName: string;
	PropertyTypes: PropertyTypesInDescribeClusterServiceConfigForAdmin;
	EffectWay: EffectWay;
	PropertyValueAttributes: PropertyValueAttributes;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.PropertyInfoListInDescribeClusterServiceConfigForAdmin
export interface PropertyInfoListInDescribeClusterServiceConfigForAdmin {
	PropertyInfo: PropertyInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ConfigItemValue
export interface ConfigItemValue {
	ChangeType: string;
	Value: string;
	OldValue: string;
	IsCustom: boolean;
	Description: string;
	ItemName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ConfigItemValueListInDescribeClusterServiceConfigForAdmin
export interface ConfigItemValueListInDescribeClusterServiceConfigForAdmin {
	ConfigItemValue: ConfigItemValue[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ConfigValue
export interface ConfigValue {
	ConfigName: string;
	AllowCustom: boolean;
	ConfigItemValueList: ConfigItemValueListInDescribeClusterServiceConfigForAdmin;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ConfigValueListInDescribeClusterServiceConfigForAdmin
export interface ConfigValueListInDescribeClusterServiceConfigForAdmin {
	ConfigValue: ConfigValue[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.Config
export interface Config {
	Author: string;
	CreateTime: string;
	ConfigName: string;
	ConfigValue: string;
	ConfigVersion: string;
	Applied: string;
	Replace: string;
	Comment: string;
	Value: string;
	ConfigKey: string;
	ServiceName: string;
	FileName: string;
	Encrypt: string;
	PropertyInfoList: PropertyInfoListInDescribeClusterServiceConfigForAdmin;
	ConfigValueList: ConfigValueListInDescribeClusterServiceConfigForAdmin;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ConfigListInDescribeExecutionPlan
export interface ConfigListInDescribeExecutionPlan {
	Config: Config[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.GatewayClusterInfo
export interface GatewayClusterInfo {
	ClusterId: string;
	ClusterName: string;
	Status: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.GatewayClusterInfoListInDescribeClusterV2
export interface GatewayClusterInfoListInDescribeClusterV2 {
	GatewayClusterInfo: GatewayClusterInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ClusterInfo
export interface ClusterInfo {
	UserDefinedEmrEcsRole: string;
	ImageId: string;
	Configurations: string;
	AutoScalingEnable: boolean;
	EasEnable: boolean;
	CreateType: string;
	StartTime: number;
	RunningTime: number;
	LocalMetaDb: boolean;
	BootstrapFailed: boolean;
	Id: string;
	VpcId: string;
	SecurityGroupName: string;
	TaskNodeInService: number;
	ExpiredTime: number;
	NetType: string;
	AutoScalingByLoadAllowed: boolean;
	Type: string;
	ClusterId: string;
	InitCustomHiveMetaDB: boolean;
	DepositType: string;
	UseLocalMetaDb: boolean;
	OrderList: string;
	CreateResource: string;
	UseCustomHiveMetaDB: boolean;
	ResizeDiskEnable: boolean;
	StopTime: number;
	ZoneId: string;
	HasUncompletedOrder: boolean;
	MasterNodeInService: number;
	Status: string;
	MetaStoreType: string;
	Name: string;
	SecurityGroupId: string;
	AutoScalingSpotWithLimitAllowed: boolean;
	ChargeType: string;
	MachineType: string;
	ShowSoftwareInterface: boolean;
	CreateTime: number;
	RelateClusterId: string;
	GatewayClusterIds: string;
	RegionId: string;
	CoreNodeTotal: number;
	IoOptimized: boolean;
	CoreNodeInService: number;
	UserId: string;
	EmrVer: string;
	AutoScalingAllowed: boolean;
	ClusterType: string;
	MasterNodeTotal: number;
	TaskNodeTotal: number;
	VSwitchId: string;
	Period: number;
	InstanceGeneration: string;
	LogPath: string;
	HighAvailabilityEnable: boolean;
	LogEnable: boolean;
	RelateClusterInfo: RelateClusterInfo;
	OrderTaskInfo: OrderTaskInfo;
	FailReason: FailReason;
	SoftwareInfo: SoftwareInfo;
	AccessInfo: AccessInfo;
	HostPoolInfo: HostPoolInfo;
	EcsOrders: EcsOrders;
	HostGroupList: HostGroupListInDescribeClusterV2;
	BootstrapActionList: BootstrapActionListInDescribeClusterV2;
	ConfigList: ConfigListInDescribeExecutionPlan;
	GatewayClusterInfoList: GatewayClusterInfoListInDescribeClusterV2;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.JobInfo
export interface JobInfo {
	Name: string;
	ClusterId: string;
	JobId: string;
	FailAct: string;
	IndexNO: number;
	RetryInterval: number;
	Status: number;
	MaxRetry: number;
	Id: string;
	RunParameter: string;
	Description: string;
	Type: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.JobInfoList
export interface JobInfoList {
	JobInfo: JobInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.DescribeExecutionPlanResponse
export interface DescribeExecutionPlanResponse {
	RequestId: string;
	Id: string;
	Name: string;
	Status: string;
	Strategy: string;
	TimeInterval: number;
	StartTime: number;
	TimeUnit: string;
	DayOfWeek: string;
	DayOfMonth: string;
	CreateClusterOnDemand: boolean;
	ClusterId: string;
	ClusterName: string;
	WorkflowApp: string;
	ExecutionPlanVersion: number;
	ClusterInfo: ClusterInfo;
	JobInfoList: JobInfoList;
}

