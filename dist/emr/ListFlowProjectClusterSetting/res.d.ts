// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.UserListInListFlowProjectClusterSetting
export interface UserListInListFlowProjectClusterSetting {
	User: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.QueueListInListFlowProjectClusterSetting
export interface QueueListInListFlowProjectClusterSetting {
	Queue: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.HostListInListFlowProjectClusterSetting
export interface HostListInListFlowProjectClusterSetting {
	Host: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ClusterSetting
export interface ClusterSetting {
	GmtCreate: number;
	GmtModified: number;
	ProjectId: string;
	ClusterId: string;
	ClusterName: string;
	DefaultUser: string;
	DefaultQueue: string;
	UserList: UserListInListFlowProjectClusterSetting;
	QueueList: QueueListInListFlowProjectClusterSetting;
	HostList: HostListInListFlowProjectClusterSetting;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ClusterSettings
export interface ClusterSettings {
	ClusterSetting: ClusterSetting[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ListFlowProjectClusterSettingResponse
export interface ListFlowProjectClusterSettingResponse {
	RequestId: string;
	PageNumber: number;
	PageSize: number;
	Total: number;
	ClusterSettings: ClusterSettings;
}

