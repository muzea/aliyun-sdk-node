// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.OutputFile
export interface OutputFile {
	Width: string;
	Height: string;
	Bitrate: string;
	Fps: string;
	Format: string;
	Duration: string;
	Filesize: number;
	Encryption: string;
	AudioStreamList: string;
	VideoStreamList: string;
	SubtitleStreamList: string;
	OutputFileUrl: string;
	WatermarkIdList: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.TranscodeJobInfo
export interface TranscodeJobInfo {
	TranscodeJobId: string;
	TranscodeTemplateId: string;
	TranscodeJobStatus: string;
	CreationTime: string;
	CompleteTime: string;
	TranscodeProgress: number;
	InputFileUrl: string;
	Priority: string;
	ErrorCode: string;
	ErrorMessage: string;
	Definition: string;
	OutputFile: OutputFile;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.TranscodeTask
export interface TranscodeTask {
	Trigger: string;
	TranscodeTaskId: string;
	CreationTime: string;
	CompleteTime: string;
	TranscodeTemplateGroupId: string;
	TaskStatus: string;
	VideoId: string;
	TranscodeJobInfoList: TranscodeJobInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.ListTranscodeTaskResponse
export interface ListTranscodeTaskResponse {
	RequestId: string;
	TranscodeTaskList: TranscodeTask[];
}

