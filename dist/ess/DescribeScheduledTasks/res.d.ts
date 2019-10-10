// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ess.ScheduledTask
export interface ScheduledTask {
	ScheduledTaskId: string;
	ScheduledTaskName: string;
	Description: string;
	ScheduledAction: string;
	RecurrenceEndTime: string;
	LaunchTime: string;
	RecurrenceType: string;
	RecurrenceValue: string;
	LaunchExpirationTime: number;
	TaskEnabled: boolean;
	MaxValue: number;
	MinValue: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ess.ScheduledTasks
export interface ScheduledTasks {
	ScheduledTask: ScheduledTask[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ess.DescribeScheduledTasksResponse
export interface DescribeScheduledTasksResponse {
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	RequestId: string;
	ScheduledTasks: ScheduledTasks;
}

