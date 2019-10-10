// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.IspCity
export interface IspCity {
	IspName.zh_CN: string;
	CityName.zh_CN: string;
	IspName: string;
	Region.zh_CN: string;
	IspName.en: string;
	Country.en: string;
	Country.zh_CN: string;
	CityName.en: string;
	CityName: string;
	Isp: string;
	Region.en: string;
	City: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.IspCities
export interface IspCities {
	IspCity: IspCity[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.SiteMonitors
export interface SiteMonitors {
	OptionJson: string;
	TaskId: string;
	Interval: string;
	TaskName: string;
	TaskState: string;
	TaskType: string;
	Address: string;
	IspCities: IspCities;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.MetricRule
export interface MetricRule {
	RuleId: string;
	RuleName: string;
	Namespace: string;
	MetricName: string;
	OkActions: string;
	AlarmActions: string;
	Statistics: string;
	ActionEnable: string;
	Period: string;
	ComparisonOperator: string;
	Threshold: string;
	EvaluationCount: string;
	Level: string;
	Expression: string;
	StateValue: string;
	Dimensions: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.MetricRules
export interface MetricRules {
	MetricRule: MetricRule[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.DescribeSiteMonitorAttributeResponse
export interface DescribeSiteMonitorAttributeResponse {
	Code: string;
	Message: string;
	Success: boolean;
	RequestId: string;
	SiteMonitors: SiteMonitors;
	MetricRules: MetricRules;
}

