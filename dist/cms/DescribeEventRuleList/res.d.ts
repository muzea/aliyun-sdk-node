// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.NameListInDescribeEventRuleList
export interface NameListInDescribeEventRuleList {
	NameList: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.LevelListInDescribeEventRuleList
export interface LevelListInDescribeEventRuleList {
	LevelList: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.EventTypeList
export interface EventTypeList {
	EventTypeList: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.EventPatternItem
export interface EventPatternItem {
	Product: string;
	NameList: NameListInDescribeEventRuleList;
	LevelList: LevelListInDescribeEventRuleList;
	EventTypeList: EventTypeList;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.EventPatternInDescribeEventRuleList
export interface EventPatternInDescribeEventRuleList {
	EventPattern: EventPatternItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.EventRule
export interface EventRule {
	Name: string;
	GroupId: string;
	EventType: string;
	State: string;
	Description: string;
	EventPattern: EventPatternInDescribeEventRuleList;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.EventRules
export interface EventRules {
	EventRule: EventRule[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.DescribeEventRuleListResponse
export interface DescribeEventRuleListResponse {
	Success: boolean;
	Code: string;
	Message: string;
	RequestId: string;
	Total: number;
	EventRules: EventRules;
}

