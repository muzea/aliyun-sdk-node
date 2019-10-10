// this file was automatically generated, DO NOT EDIT
// structs
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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.DescribeClusterServiceResponse
export interface DescribeClusterServiceResponse {
	RequestId: string;
	ServiceInfo: ServiceInfo;
}

