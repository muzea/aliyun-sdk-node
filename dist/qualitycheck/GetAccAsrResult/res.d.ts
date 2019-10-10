// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.ServiceEvStat
export interface ServiceEvStat {
	Srole: number;
	SminEmotionValue: number;
	SavgEmotionValue: number;
	SmaxEmotionValue: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.ClientEvStat
export interface ClientEvStat {
	CminEmotionValue: number;
	CavgEmotionValue: number;
	Crole: number;
	CmaxEmotionValue: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.ServiceSrStat
export interface ServiceSrStat {
	Srole: number;
	SavgSpeechRate: number;
	SmaxSpeechRate: number;
	SminSpeechRate: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.ClientSrStat
export interface ClientSrStat {
	CmaxSpeechRate: number;
	CavgSpeechRate: number;
	Crole: number;
	CminSpeechRate: number;
}

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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.Results
export interface Results {
	SentenceResult: SentenceResult[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.AccAsrSentenceResult
export interface AccAsrSentenceResult {
	RecordId: string;
	Status: string;
	StatusCode: string;
	ErrorMessage: string;
	Duration: number;
	ClientDuration: number;
	ServiceDuration: number;
	InteractiveCount: number;
	ServiceEvStat: ServiceEvStat;
	ClientEvStat: ClientEvStat;
	ServiceSrStat: ServiceSrStat;
	ClientSrStat: ClientSrStat;
	Results: Results;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.DataInGetAccAsrResult
export interface DataInGetAccAsrResult {
	AccAsrSentenceResult: AccAsrSentenceResult[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.GetAccAsrResultResponse
export interface GetAccAsrResultResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Message: string;
	Count: number;
	Data: DataInGetAccAsrResult;
}

