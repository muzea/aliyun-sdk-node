// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.Warn
export interface Warn {
	ComparisonOperator: string;
	Times: string;
	Statistics: string;
	Threshold: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.Info
export interface Info {
	ComparisonOperator: string;
	Times: string;
	Statistics: string;
	Threshold: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.Critical
export interface Critical {
	ComparisonOperator: string;
	Times: string;
	Statistics: string;
	Threshold: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.Escalations
export interface Escalations {
	Warn: Warn;
	Info: Info;
	Critical: Critical;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.Alarm
export interface Alarm {
	Resources: string;
	RuleName: string;
	ContactGroups: string;
	EffectiveInterval: string;
	GroupName: string;
	Dimensions: string;
	RuleId: string;
	ComparisonOperator: string;
	MailSubject: string;
	SourceType: string;
	EnableState: boolean;
	GroupId: string;
	EvaluationCount: string;
	SilenceTime: string;
	Threshold: string;
	Period: string;
	StartTime: string;
	State: string;
	EndTime: string;
	Namespace: string;
	Enable: string;
	MetricName: string;
	AlertState: string;
	Statistics: string;
	Webhook: string;
	NoEffectiveInterval: string;
	Escalations: Escalations;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.Alarms
export interface Alarms {
	Alarm: Alarm[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.DescribeMetricRuleListResponse
export interface DescribeMetricRuleListResponse {
	RequestId: string;
	Success: boolean;
	Code: number;
	Message: string;
	Total: string;
	Alarms: Alarms;
}

