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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ess.Alarms
export interface Alarms {
	Alarm: Alarm[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ess.StepAdjustment
export interface StepAdjustment {
	MetricIntervalLowerBound: number;
	MetricIntervalUpperBound: number;
	ScalingAdjustment: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ess.StepAdjustments
export interface StepAdjustments {
	StepAdjustment: StepAdjustment[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ess.ScalingRule
export interface ScalingRule {
	ScalingRuleId: string;
	ScalingGroupId: string;
	ScalingRuleName: string;
	Cooldown: number;
	MinAdjustmentMagnitude: number;
	AdjustmentType: string;
	AdjustmentValue: number;
	MinSize: number;
	MaxSize: number;
	ScalingRuleAri: string;
	ScalingRuleType: string;
	EstimatedInstanceWarmup: number;
	MetricName: string;
	TargetValue: number;
	DisableScaleIn: boolean;
	PredictiveScalingMode: string;
	PredictiveValueBehavior: string;
	PredictiveValueBuffer: number;
	PredictiveTaskBufferTime: number;
	InitialMaxSize: number;
	Alarms: Alarms;
	StepAdjustments: StepAdjustments;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ess.ScalingRules
export interface ScalingRules {
	ScalingRule: ScalingRule[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ess.DescribeScalingRulesResponse
export interface DescribeScalingRulesResponse {
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	RequestId: string;
	ScalingRules: ScalingRules;
}

