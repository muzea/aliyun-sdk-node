// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ServiceAction
export interface ServiceAction {
	Command: string;
	ComponentName: string;
	ActionName: string;
	ServiceName: string;
	DisplayName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ServiceActionListInListClusterService
export interface ServiceActionListInListClusterService {
	ServiceAction: ServiceAction[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ClusterService
export interface ClusterService {
	ServiceName: string;
	ServiceDisplayName: string;
	ServiceVersion: string;
	InstallStatus: boolean;
	ClientType: boolean;
	ServiceStatus: string;
	HealthStatus: string;
	NeedRestartInfo: string;
	NotStartInfo: string;
	AbnormalNum: number;
	StoppedNum: number;
	NeedRestartNum: number;
	ServiceActionList: ServiceActionListInListClusterService;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ClusterServiceList
export interface ClusterServiceList {
	ClusterService: ClusterService[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ListClusterServiceResponse
export interface ListClusterServiceResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	ClusterServiceList: ClusterServiceList;
}

