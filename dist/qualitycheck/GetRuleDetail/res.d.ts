// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.Range
export interface Range {
	To: number;
	From: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.Anchor
export interface Anchor {
	Cid: string;
	HitTime: number;
	Location: string;
	AnchorCid: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.CheckRange
export interface CheckRange {
	Role: string;
	RoleId: number;
	Absolute: boolean;
	Range: Range;
	Anchor: Anchor;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.OperKeyWordsInGetRuleDetail
export interface OperKeyWordsInGetRuleDetail {
	OperKeyWord: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.ReferencesInGetRuleDetail
export interface ReferencesInGetRuleDetail {
	Reference: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.KeywordsInConfigDataSet
export interface KeywordsInConfigDataSet {
	Keywords: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.Param
export interface Param {
	Regex: string;
	Target: number;
	InSentence: boolean;
	DifferentRole: boolean;
	Interval: number;
	FromEnd: boolean;
	TargetRole: string;
	Threshold: number;
	Phrase: string;
	OperKeyWords: OperKeyWordsInGetRuleDetail;
	References: ReferencesInGetRuleDetail;
	Keywords: KeywordsInConfigDataSet;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.OperatorBasicInfo
export interface OperatorBasicInfo {
	Name: string;
	Oid: string;
	OperName: string;
	Type: string;
	Param: Param;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.OperatorsInUploadDataSync
export interface OperatorsInUploadDataSync {
	OperatorBasicInfo: OperatorBasicInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.ConditionBasicInfo
export interface ConditionBasicInfo {
	Cid: string;
	ConditionInfoCid: string;
	Lambda: string;
	OperLambda: string;
	CheckRange: CheckRange;
	Operators: OperatorsInUploadDataSync;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.ConditionsInGetRuleDetail
export interface ConditionsInGetRuleDetail {
	ConditionBasicInfo: ConditionBasicInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.Triggers
export interface Triggers {
	Trigger: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.BusinessCategoryBasicInfo
export interface BusinessCategoryBasicInfo {
	BusinessName: string;
	Bid: number;
	ServiceType: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.BusinessCategories
export interface BusinessCategories {
	BusinessCategoryBasicInfo: BusinessCategoryBasicInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.RuleBasicInfo
export interface RuleBasicInfo {
	Name: string;
	Rid: string;
	Lambda: string;
	ExternalProperty: number;
	RuleLambda: string;
	Triggers: Triggers;
	BusinessCategories: BusinessCategories;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.RulesInGetRuleDetail
export interface RulesInGetRuleDetail {
	RuleBasicInfo: RuleBasicInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.DataInGetRuleDetail
export interface DataInGetRuleDetail {
	Conditions: ConditionsInGetRuleDetail;
	Rules: RulesInGetRuleDetail;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.GetRuleDetailResponse
export interface GetRuleDetailResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Message: string;
	Data: DataInGetRuleDetail;
}

