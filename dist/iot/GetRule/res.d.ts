// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.RuleInfo
export interface RuleInfo {
	Name: string;
	Created: string;
	CreateUserId: number;
	Where: string;
	ProductKey: string;
	RuleDesc: string;
	Id: number;
	UtcCreated: string;
	UtcModified: string;
	ShortTopic: string;
	DataType: string;
	Select: string;
	TopicType: number;
	Status: string;
	Topic: string;
	Modified: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.GetRuleResponse
export interface GetRuleResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	ErrorMessage: string;
	RuleInfo: RuleInfo;
}

