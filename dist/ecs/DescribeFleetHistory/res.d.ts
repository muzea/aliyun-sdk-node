// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.ActivityDetailInDescribeFleetHistory
export interface ActivityDetailInDescribeFleetHistory {
	Detail: string;
	Status: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.ActivityDetailsInDescribeFleetHistory
export interface ActivityDetailsInDescribeFleetHistory {
	ActivityDetail: ActivityDetailInDescribeFleetHistory[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.FleetHistory
export interface FleetHistory {
	TaskId: string;
	Status: string;
	LastEventTime: string;
	StartTime: string;
	ActivityDetails: ActivityDetailsInDescribeFleetHistory;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.FleetHistorys
export interface FleetHistorys {
	FleetHistory: FleetHistory[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DescribeFleetHistoryResponse
export interface DescribeFleetHistoryResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	FleetHistorys: FleetHistorys;
}

