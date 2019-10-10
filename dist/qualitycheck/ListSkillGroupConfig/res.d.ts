// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.RuleNameInfo
export interface RuleNameInfo {
	Rid: number;
	RuleName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.RuleListInListSkillGroupConfig
export interface RuleListInListSkillGroupConfig {
	RuleNameInfo: RuleNameInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.SkillGroupConfig
export interface SkillGroupConfig {
	Id: number;
	InstanceId: string;
	ModelId: number;
	ModelName: string;
	Name: string;
	Rid: string;
	SkillGroupId: string;
	SkillGroupName: string;
	Status: number;
	Type: number;
	VocabId: number;
	VocabName: string;
	CreateTime: string;
	UpdateTime: string;
	RuleList: RuleListInListSkillGroupConfig;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.DataInListSkillGroupConfig
export interface DataInListSkillGroupConfig {
	SkillGroupConfig: SkillGroupConfig[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.ListSkillGroupConfigResponse
export interface ListSkillGroupConfigResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Message: string;
	Data: DataInListSkillGroupConfig;
}

