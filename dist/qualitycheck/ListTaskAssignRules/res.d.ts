// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.Agent
export interface Agent {
	Name: string;
	AgentName: string;
	AgentId: string;
	SkillGroup: string;
	Id: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.Agents
export interface Agents {
	Agent: Agent[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.SkillGroup
export interface SkillGroup {
	SkillId: string;
	SkillName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.SkillGroups
export interface SkillGroups {
	SkillGroup: SkillGroup[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.Reviewer
export interface Reviewer {
	ReviewerId: string;
	ReviewerName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.Reviewers
export interface Reviewers {
	Reviewer: Reviewer[];
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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.RulesInListTaskAssignRules
export interface RulesInListTaskAssignRules {
	RuleBasicInfo: RuleBasicInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.TaskAssignRuleInfo
export interface TaskAssignRuleInfo {
	RuleId: number;
	Enabled: number;
	CallType: number;
	Priority: number;
	DurationMin: number;
	DurationMax: number;
	CreateTime: string;
	UpdateTime: string;
	AgentsStr: string;
	SkillGroupsStr: string;
	Agents: Agents;
	SkillGroups: SkillGroups;
	Reviewers: Reviewers;
	Rules: RulesInListTaskAssignRules;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.DataInListTaskAssignRules
export interface DataInListTaskAssignRules {
	TaskAssignRuleInfo: TaskAssignRuleInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.ListTaskAssignRulesResponse
export interface ListTaskAssignRulesResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Message: string;
	PageNumber: number;
	PageSize: number;
	Count: number;
	Data: DataInListTaskAssignRules;
}

