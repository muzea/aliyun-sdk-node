// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.CustomTranscodeParameters
export interface CustomTranscodeParameters {
	VideoBitrate: number;
	FPS: number;
	Height: number;
	Width: number;
	TemplateType: string;
	VideoProfile: string;
	Gop: string;
	AudioBitrate: number;
	AudioProfile: string;
	AudioCodec: string;
	AudioRate: number;
	AudioChannelNum: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.DomainTranscodeInfo
export interface DomainTranscodeInfo {
	TranscodeApp: string;
	TranscodeName: string;
	TranscodeTemplate: string;
	CustomTranscodeParameters: CustomTranscodeParameters;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.DomainTranscodeList
export interface DomainTranscodeList {
	DomainTranscodeInfo: DomainTranscodeInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.DescribeLiveStreamTranscodeInfoResponse
export interface DescribeLiveStreamTranscodeInfoResponse {
	RequestId: string;
	DomainTranscodeList: DomainTranscodeList;
}

