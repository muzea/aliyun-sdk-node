// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.NonExistAnalysisJobIds
export interface NonExistAnalysisJobIds {
	String: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.QualityControl
export interface QualityControl {
	MethodStreaming: string;
	RateQuality: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.Crop
export interface Crop {
	Height: string;
	Width: string;
	Top: string;
	Left: string;
	Mode: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.PropertiesControl
export interface PropertiesControl {
	Deinterlace: string;
	Crop: Crop;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.AnalysisConfig
export interface AnalysisConfig {
	QualityControl: QualityControl;
	PropertiesControl: PropertiesControl;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.InputFile
export interface InputFile {
	Bucket: string;
	Object: string;
	Location: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.MNSMessageResult
export interface MNSMessageResult {
	MessageId: string;
	ErrorMessage: string;
	ErrorCode: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.Gif
export interface Gif {
	FinalDelay: string;
	Loop: string;
	IsCustomPalette: string;
	DitherMode: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.Webp
export interface Webp {
	Loop: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.Segment
export interface Segment {
	Duration: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.MuxConfig
export interface MuxConfig {
	Gif: Gif;
	Webp: Webp;
	Segment: Segment;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.Volume
export interface Volume {
	Level: string;
	Method: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.Audio
export interface Audio {
	Qscale: string;
	Samplerate: string;
	Profile: string;
	Bitrate: string;
	Remove: string;
	Codec: string;
	Channels: string;
	Volume: Volume;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.TransConfig
export interface TransConfig {
	IsCheckResoFail: string;
	AdjDarMethod: string;
	IsCheckAudioBitrate: string;
	Duration: string;
	IsCheckReso: string;
	IsCheckAudioBitrateFail: string;
	IsCheckVideoBitrate: string;
	TransMode: string;
	IsCheckVideoBitrateFail: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.BitrateBnd
export interface BitrateBnd {
	Min: string;
	Max: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.Video
export interface Video {
	Height: string;
	Preset: string;
	MaxFps: string;
	Gop: string;
	Qscale: string;
	LongShortMode: string;
	Profile: string;
	Fps: string;
	Bitrate: string;
	Bufsize: string;
	PixFmt: string;
	Remove: string;
	Crop: string;
	Crf: string;
	ScanMode: string;
	Width: string;
	ResoPriority: string;
	Codec: string;
	Maxrate: string;
	Degrain: string;
	Pad: string;
	BitrateBnd: BitrateBnd;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.Container
export interface Container {
	Format: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.Template
export interface Template {
	TemplateId: string;
	Name: string;
	Terrorism: string;
	Logo: string;
	Contraband: string;
	Qrcode: string;
	Abuse: string;
	Id: string;
	Live: string;
	Spam: string;
	Ad: string;
	State: string;
	Porn: string;
	Politics: string;
	MuxConfig: MuxConfig;
	Audio: Audio;
	TransConfig: TransConfig;
	Video: Video;
	Container: Container;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.TemplateListInQueryAnalysisJobList
export interface TemplateListInQueryAnalysisJobList {
	Template: Template[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.AnalysisJob
export interface AnalysisJob {
	Message: string;
	Code: string;
	CreationTime: string;
	UserData: string;
	Priority: string;
	State: string;
	PipelineId: string;
	Percent: number;
	Id: string;
	AnalysisConfig: AnalysisConfig;
	InputFile: InputFile;
	MNSMessageResult: MNSMessageResult;
	TemplateList: TemplateListInQueryAnalysisJobList;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.AnalysisJobList
export interface AnalysisJobList {
	AnalysisJob: AnalysisJob[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.QueryAnalysisJobListResponse
export interface QueryAnalysisJobListResponse {
	RequestId: string;
	NonExistAnalysisJobIds: NonExistAnalysisJobIds;
	AnalysisJobList: AnalysisJobList;
}

