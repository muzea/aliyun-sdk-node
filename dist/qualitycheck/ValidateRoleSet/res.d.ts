// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.SentenceResult
export interface SentenceResult {
	BeginTime: number;
	Text: string;
	AgentId: string;
	ChannelId: number;
	SpeechRate: number;
	SpeakerId: string;
	ChannelKey: string;
	EndTime: number;
	IdentificationId: number;
	SilenceDuration: number;
	EmotionValue: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.DataInValidateRoleSet
export interface DataInValidateRoleSet {
	SentenceResult: SentenceResult[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.ValidateRoleSetResponse
export interface ValidateRoleSetResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Message: string;
	Data: DataInValidateRoleSet;
}

