// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.ClientSrStat
export interface ClientSrStat {
	CmaxSpeechRate: number;
	CavgSpeechRate: number;
	Crole: number;
	CminSpeechRate: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.ServiceSrStat
export interface ServiceSrStat {
	Srole: number;
	SavgSpeechRate: number;
	SmaxSpeechRate: number;
	SminSpeechRate: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.ClientEvStat
export interface ClientEvStat {
	CminEmotionValue: number;
	CavgEmotionValue: number;
	Crole: number;
	CmaxEmotionValue: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.ServiceEvStat
export interface ServiceEvStat {
	Srole: number;
	SminEmotionValue: number;
	SavgEmotionValue: number;
	SmaxEmotionValue: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.SentenceResultInGetAudioDataStatus
export interface SentenceResultInGetAudioDataStatus {
	BeginTime: number;
	EndTime: number;
	ChannelId: number;
	Text: string;
	EmotionValue: number;
	SilenceDuration: number;
	SpeechRate: number;
	SpeakerId: string;
	AgentId: string;
	ChannelKey: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.SentenceResults
export interface SentenceResults {
	SentenceResult: SentenceResultInGetAudioDataStatus[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.AsrResult
export interface AsrResult {
	Asrstatus: string;
	ErrorMessage: string;
	AsrStatusCode: string;
	Duration: number;
	InteractiveCount: number;
	ClientSrStat: ClientSrStat;
	ServiceSrStat: ServiceSrStat;
	ClientEvStat: ClientEvStat;
	ServiceEvStat: ServiceEvStat;
	SentenceResults: SentenceResults;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.TaskAsrResult
export interface TaskAsrResult {
	Tid: string;
	StatusCode: number;
	StatusMsg: string;
	AsrResult: AsrResult;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.DataInGetAudioDataStatus
export interface DataInGetAudioDataStatus {
	TaskAsrResult: TaskAsrResult[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.GetAudioDataStatusResponse
export interface GetAudioDataStatusResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Message: string;
	Count: number;
	OverallStatus: number;
	Data: DataInGetAudioDataStatus;
}

