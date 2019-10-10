// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.Instances
export interface Instances {
	Instance: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.TaskOption
export interface TaskOption {
	HttpURI: string;
	TelnetOrPingHost: string;
	HttpResponseCharset: string;
	HttpKeyword: string;
	HttpMethod: string;
	HttpNegative: boolean;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.EscalationList
export interface EscalationList {
	Value: string;
	Aggregate: string;
	MetricName: string;
	Times: string;
	Operator: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.EscalationListInDescribeHostAvailabilityList
export interface EscalationListInDescribeHostAvailabilityList {
	escalationList: EscalationList[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.AlertConfig
export interface AlertConfig {
	NotifyType: number;
	StartTime: number;
	EndTime: number;
	SilenceTime: number;
	WebHook: string;
	EscalationList: EscalationListInDescribeHostAvailabilityList;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.NodeTaskConfig
export interface NodeTaskConfig {
	Id: number;
	TaskName: string;
	TaskType: string;
	TaskScope: string;
	Disabled: boolean;
	GroupId: number;
	GroupName: string;
	Instances: Instances;
	TaskOption: TaskOption;
	AlertConfig: AlertConfig;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.TaskList
export interface TaskList {
	NodeTaskConfig: NodeTaskConfig[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.DescribeHostAvailabilityListResponse
export interface DescribeHostAvailabilityListResponse {
	Code: string;
	Message: string;
	Success: boolean;
	RequestId: string;
	Total: number;
	TaskList: TaskList;
}

