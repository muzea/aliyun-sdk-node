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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ServiceActionListInListClusterInstalledService
export interface ServiceActionListInListClusterInstalledService {
	ServiceAction: ServiceAction[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ClusterInstalledService
export interface ClusterInstalledService {
	ServiceName: string;
	ServiceDisplayName: string;
	ServiceVersion: string;
	ServiceEcmVersion: string;
	serviceStatus: string;
	onlyClient: boolean;
	notStartedNum: number;
	needRestartNum: number;
	abnormalNum: number;
	comment: string;
	ServiceActionList: ServiceActionListInListClusterInstalledService;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ClusterInstalledServiceList
export interface ClusterInstalledServiceList {
	ClusterInstalledService: ClusterInstalledService[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ListClusterInstalledServiceResponse
export interface ListClusterInstalledServiceResponse {
	RequestId: string;
	ClusterInstalledServiceList: ClusterInstalledServiceList;
}

