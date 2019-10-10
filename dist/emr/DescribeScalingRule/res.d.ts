// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.SchedulerTrigger
export interface SchedulerTrigger {
	RecurrenceEndTime: number;
	RecurrenceType: string;
	LaunchTime: number;
	RecurrenceValue: string;
	LaunchExpirationTime: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.CloudWatchTrigger
export interface CloudWatchTrigger {
	ComparisonOperator: string;
	MetricDisplayName: string;
	Unit: string;
	Period: number;
	MetricName: string;
	Statistics: string;
	EvaluationCount: string;
	Threshold: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.DescribeScalingRuleResponse
export interface DescribeScalingRuleResponse {
	RequestId: string;
	Id: string;
	GmtCreate: string;
	GmtModified: string;
	RuleName: string;
	RuleCategory: string;
	AdjustmentType: string;
	AdjustmentValue: number;
	Cooldown: number;
	Status: string;
	SchedulerTrigger: SchedulerTrigger;
	CloudWatchTrigger: CloudWatchTrigger;
}

