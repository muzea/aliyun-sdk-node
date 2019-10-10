// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.LevelListInDescribeEventRuleAttribute
export interface LevelListInDescribeEventRuleAttribute {
	LevelList: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.StatusList
export interface StatusList {
	StatusList: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.NameListInDescribeEventRuleAttribute
export interface NameListInDescribeEventRuleAttribute {
	NameList: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.EventPattern
export interface EventPattern {
	Product: string;
	LevelList: LevelListInDescribeEventRuleAttribute;
	StatusList: StatusList;
	NameList: NameListInDescribeEventRuleAttribute;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.ResultInDescribeEventRuleAttribute
export interface ResultInDescribeEventRuleAttribute {
	Description: string;
	Name: string;
	EventType: string;
	GroupId: string;
	State: string;
	EventPattern: EventPattern;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.DescribeEventRuleAttributeResponse
export interface DescribeEventRuleAttributeResponse {
	Success: boolean;
	Code: string;
	Message: string;
	RequestId: string;
	Result: ResultInDescribeEventRuleAttribute;
}

