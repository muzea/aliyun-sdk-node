// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.TranscodeJobInfoSummary
export interface TranscodeJobInfoSummary {
	TranscodeTemplateId: string;
	TranscodeJobStatus: string;
	CreationTime: string;
	CompleteTime: string;
	TranscodeProgress: number;
	ErrorCode: string;
	ErrorMessage: string;
	Definition: string;
	Encryption: string;
	Width: string;
	Height: string;
	Bitrate: string;
	Fps: string;
	Format: string;
	Duration: string;
	Filesize: number;
	WatermarkIdList: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.TranscodeSummary
export interface TranscodeSummary {
	VideoId: string;
	TranscodeStatus: string;
	CreationTime: string;
	CompleteTime: string;
	Trigger: string;
	TranscodeTemplateGroupId: string;
	TranscodeJobInfoSummaryList: TranscodeJobInfoSummary[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.GetTranscodeSummaryResponse
export interface GetTranscodeSummaryResponse {
	RequestId: string;
	NonExistVideoIds: string[];
	TranscodeSummaryList: TranscodeSummary[];
}

