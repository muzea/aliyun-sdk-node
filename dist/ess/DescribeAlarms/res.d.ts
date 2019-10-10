// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ess.AlarmActions
export interface AlarmActions {
	AlarmAction: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ess.Dimension
export interface Dimension {
	DimensionValue: string;
	DimensionKey: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ess.DimensionsInDescribeAlarms
export interface DimensionsInDescribeAlarms {
	Dimension: Dimension[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ess.Alarm
export interface Alarm {
	Name: string;
	MetricType: string;
	Period: number;
	Threshold: number;
	AlarmTaskId: string;
	ComparisonOperator: string;
	State: string;
	Enable: boolean;
	MetricName: string;
	Statistics: string;
	ScalingGroupId: string;
	Description: string;
	AlarmTaskName: string;
	EvaluationCount: number;
	AlarmActions: AlarmActions;
	Dimensions: DimensionsInDescribeAlarms;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ess.AlarmList
export interface AlarmList {
	Alarm: Alarm[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ess.DescribeAlarmsResponse
export interface DescribeAlarmsResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	AlarmList: AlarmList;
}

