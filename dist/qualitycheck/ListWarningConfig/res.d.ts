// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.RidList
export interface RidList {
	RidList: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.WarningRule
export interface WarningRule {
	Rid: number;
	RuleName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.RuleListInListWarningConfig
export interface RuleListInListWarningConfig {
	WarningRule: WarningRule[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.Channel
export interface Channel {
	Type: number;
	Url: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.Channels
export interface Channels {
	Channel: Channel[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.WarningConfigInfo
export interface WarningConfigInfo {
	ConfigId: number;
	ConfigName: string;
	Status: number;
	CreateTime: string;
	UpdateTime: string;
	RidList: RidList;
	RuleList: RuleListInListWarningConfig;
	Channels: Channels;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.DataInListWarningConfig
export interface DataInListWarningConfig {
	WarningConfigInfo: WarningConfigInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.ListWarningConfigResponse
export interface ListWarningConfigResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Message: string;
	Data: DataInListWarningConfig;
}

