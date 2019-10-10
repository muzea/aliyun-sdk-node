// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.AudioTextsItem
export interface AudioTextsItem {
	Text: string;
	BeginTime: number;
	EndTime: number;
	SilenceDuration: number;
	EmotionValue: number;
	ChannelId: number;
	SpeechRate: number;
	Confidence: number;
	Person: string;
	Library: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.AudiosItem
export interface AudiosItem {
	AudioDuration: number;
	AudioUri: string;
	AudioRate: number;
	SourceType: string;
	ModifyTime: string;
	FileSize: number;
	SourceUri: string;
	CreateTime: string;
	RemarksA: string;
	RemarksB: string;
	AudioTextsStatus: string;
	AudioTextsModifyTime: string;
	ProcessModifyTime: string;
	ProcessStatus: string;
	SourcePosition: string;
	AudioFormat: string;
	AudioTextsFailReason: string;
	ProcessFailReason: string;
	RemarksC: string;
	RemarksD: string;
	ExternalId: string;
	AudioTexts: AudioTextsItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.ListVideoAudiosResponse
export interface ListVideoAudiosResponse {
	SetId: string;
	VideoUri: string;
	NextMarker: string;
	RequestId: string;
	Audios: AudiosItem[];
}

