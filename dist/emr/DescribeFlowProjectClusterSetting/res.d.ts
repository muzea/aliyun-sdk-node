// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.UserListInDescribeFlowProjectClusterSetting
export interface UserListInDescribeFlowProjectClusterSetting {
	User: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.QueueListInDescribeFlowProjectClusterSetting
export interface QueueListInDescribeFlowProjectClusterSetting {
	Queue: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.HostListInDescribeFlowProjectClusterSetting
export interface HostListInDescribeFlowProjectClusterSetting {
	Host: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.DescribeFlowProjectClusterSettingResponse
export interface DescribeFlowProjectClusterSettingResponse {
	RequestId: string;
	GmtCreate: number;
	GmtModified: number;
	ProjectId: string;
	ClusterId: string;
	DefaultUser: string;
	DefaultQueue: string;
	UserList: UserListInDescribeFlowProjectClusterSetting;
	QueueList: QueueListInDescribeFlowProjectClusterSetting;
	HostList: HostListInDescribeFlowProjectClusterSetting;
}

