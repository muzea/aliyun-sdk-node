// this file was automatically generated, DO NOT EDIT
// structs
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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.EmrMainVersionListInListEmrMainVersion
export interface EmrMainVersionListInListEmrMainVersion {
	EmrMainVersion: EmrMainVersion[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ListEmrMainVersionResponse
export interface ListEmrMainVersionResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	EmrMainVersionList: EmrMainVersionListInListEmrMainVersion;
}

