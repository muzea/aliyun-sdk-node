// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.ActivityDetail
export interface ActivityDetail {
	Detail: string;
	Status: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.ActivityDetailsInDescribeAutoProvisioningGroupHistory
export interface ActivityDetailsInDescribeAutoProvisioningGroupHistory {
	ActivityDetail: ActivityDetail[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.AutoProvisioningGroupHistory
export interface AutoProvisioningGroupHistory {
	TaskId: string;
	Status: string;
	LastEventTime: string;
	StartTime: string;
	ActivityDetails: ActivityDetailsInDescribeAutoProvisioningGroupHistory;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.AutoProvisioningGroupHistories
export interface AutoProvisioningGroupHistories {
	AutoProvisioningGroupHistory: AutoProvisioningGroupHistory[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DescribeAutoProvisioningGroupHistoryResponse
export interface DescribeAutoProvisioningGroupHistoryResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	AutoProvisioningGroupHistories: AutoProvisioningGroupHistories;
}

