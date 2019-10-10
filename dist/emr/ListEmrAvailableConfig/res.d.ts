// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.KeyPairNameList
export interface KeyPairNameList {
	KeyPairName: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.WhiteUserListInListEmrMainVersion
export interface WhiteUserListInListEmrMainVersion {
	WwhiteUser: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ClusterServiceInfo
export interface ClusterServiceInfo {
	ServiceName: string;
	ServiceDisplayName: string;
	ServiceVersion: string;
	Mandatory: boolean;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ClusterServiceInfoList
export interface ClusterServiceInfoList {
	ClusterServiceInfo: ClusterServiceInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.NeedRestartComponentNameList
export interface NeedRestartComponentNameList {
	Service: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.NeedRestartHostIdList
export interface NeedRestartHostIdList {
	Service: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ClusterServiceSummary
export interface ClusterServiceSummary {
	Key: string;
	DisplayName: string;
	Value: string;
	DesiredStoppedValue: number;
	Status: string;
	Type: string;
	Category: string;
	AlertInfo: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ClusterServiceSummaryList
export interface ClusterServiceSummaryList {
	ClusterServiceSummary: ClusterServiceSummary[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ServiceAction
export interface ServiceAction {
	Command: string;
	ComponentName: string;
	ActionName: string;
	ServiceName: string;
	DisplayName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ServiceActionListInDescribeClusterService
export interface ServiceActionListInDescribeClusterService {
	ServiceAction: ServiceAction[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ServiceInfo
export interface ServiceInfo {
	ServiceDisplayVersion: string;
	Mandatory: boolean;
	NeedRestartInfo: string;
	Display: boolean;
	NeedRestartNum: number;
	ServiceStatus: string;
	ServiceDisplayName: string;
	ServiceName: string;
	ServiceVersion: string;
	NeedRestartComponentNameList: NeedRestartComponentNameList;
	NeedRestartHostIdList: NeedRestartHostIdList;
	ClusterServiceSummaryList: ClusterServiceSummaryList;
	ServiceActionList: ServiceActionListInDescribeClusterService;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ServiceInfoListInListEmrMainVersion
export interface ServiceInfoListInListEmrMainVersion {
	ServiceInfo: ServiceInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ClusterTypeInfo
export interface ClusterTypeInfo {
	ClusterType: string;
	ClusterServiceInfoList: ClusterServiceInfoList;
	ServiceInfoList: ServiceInfoListInListEmrMainVersion;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ClusterTypeInfoListInListEmrMainVersion
export interface ClusterTypeInfoListInListEmrMainVersion {
	ClusterTypeInfo: ClusterTypeInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.EmrMainVersion
export interface EmrMainVersion {
	EcmVersion: boolean;
	RegionId: string;
	EmrVersion: string;
	Display: boolean;
	ImageId: string;
	MainVersionName: string;
	StackName: string;
	StackVersion: string;
	WhiteUserList: WhiteUserListInListEmrMainVersion;
	ClusterTypeInfoList: ClusterTypeInfoListInListEmrMainVersion;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.EmrMainVersionListInListEmrAvailableConfig
export interface EmrMainVersionListInListEmrAvailableConfig {
	EmrMainVersion: EmrMainVersion[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.SecurityGroup
export interface SecurityGroup {
	SecurityGroupId: string;
	EcsCount: number;
	CreationTime: string;
	SecurityGroupName: string;
	VpcId: string;
	Description: string;
	AvailableInstanceAmount: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.SecurityGroupList
export interface SecurityGroupList {
	SecurityGroup: SecurityGroup[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.VswitchInfo
export interface VswitchInfo {
	VpcId: string;
	VswitchId: string;
	VswitchName: string;
	ZoneId: string;
	CidrBlock: string;
	AvailableIpAddressCount: number;
	Description: string;
	CreationTime: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.VswitchInfoList
export interface VswitchInfoList {
	VswitchInfo: VswitchInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.VpcInfo
export interface VpcInfo {
	VpcId: string;
	VpcName: string;
	CidrBlock: string;
	CreationTime: string;
	VRouterId: string;
	Description: string;
	VswitchInfoList: VswitchInfoList;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.VpcInfoList
export interface VpcInfoList {
	VpcInfo: VpcInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ListEmrAvailableConfigResponse
export interface ListEmrAvailableConfigResponse {
	RequestId: string;
	KeyPairNameList: KeyPairNameList;
	EmrMainVersionList: EmrMainVersionListInListEmrAvailableConfig;
	SecurityGroupList: SecurityGroupList;
	VpcInfoList: VpcInfoList;
}

