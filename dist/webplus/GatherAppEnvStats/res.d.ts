// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.EnvChange
export interface EnvChange {
	StartTime: string;
	EnvId: string;
	ChangeId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.GatherAppEnvStatsResponse
export interface GatherAppEnvStatsResponse {
	RequestId: string;
	Code: string;
	Message: string;
	EnvChange: EnvChange;
}

