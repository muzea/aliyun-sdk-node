// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.SoftwareInfoListInListClusterTemplates
export interface SoftwareInfoListInListClusterTemplates {
	SoftwareInfo: string[];
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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.HostGroupListInListClusterTemplates
export interface HostGroupListInListClusterTemplates {
	HostGroup: HostGroup[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.BootstrapAction
export interface BootstrapAction {
	Name: string;
	Path: string;
	Arg: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.BootstrapActionListInListClusterTemplates
export interface BootstrapActionListInListClusterTemplates {
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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ConfigListInListClusterTemplates
export interface ConfigListInListClusterTemplates {
	Config: Config[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.TemplateInfo
export interface TemplateInfo {
	UserDefinedEmrEcsRole: string;
	InitCustomHiveMetaDb: boolean;
	TemplateName: string;
	SecurityGroupId: string;
	MachineType: string;
	Configurations: string;
	MetaStoreConf: string;
	IsOpenPublicIp: boolean;
	CreateSource: string;
	UseCustomHiveMetaDb: boolean;
	EasEnable: boolean;
	IoOptimized: boolean;
	UserId: string;
	Id: string;
	EmrVer: string;
	VpcId: string;
	SecurityGroupName: string;
	AllowNotebook: boolean;
	NetType: string;
	ClusterType: string;
	MasterNodeTotal: number;
	VSwitchId: string;
	DepositType: string;
	UseLocalMetaDb: boolean;
	GmtCreate: number;
	ZoneId: string;
	SshEnable: boolean;
	KeyPairName: string;
	InstanceGeneration: string;
	GmtModified: number;
	LogPath: string;
	MetaStoreType: string;
	HighAvailabilityEnable: boolean;
	LogEnable: boolean;
	MasterPwd: string;
	SoftwareInfoList: SoftwareInfoListInListClusterTemplates;
	HostGroupList: HostGroupListInListClusterTemplates;
	BootstrapActionList: BootstrapActionListInListClusterTemplates;
	ConfigList: ConfigListInListClusterTemplates;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.TemplateInfoList
export interface TemplateInfoList {
	TemplateInfo: TemplateInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ListClusterTemplatesResponse
export interface ListClusterTemplatesResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	TemplateInfoList: TemplateInfoList;
}

