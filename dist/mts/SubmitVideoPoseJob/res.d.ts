// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.InputFile
export interface InputFile {
	Bucket: string;
	Object: string;
	Location: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.Input
export interface Input {
	Bucket: string;
	Duration: string;
	Start: string;
	UserData: string;
	Object: string;
	Location: string;
	RoleArn: string;
	Url: string;
	InputFile: InputFile;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.VideoFile
export interface VideoFile {
	Bucket: string;
	Object: string;
	Location: string;
	RoleArn: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.DataFile
export interface DataFile {
	Bucket: string;
	Object: string;
	Location: string;
	RoleArn: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.OutputConfig
export interface OutputConfig {
	VideoFile: VideoFile;
	DataFile: DataFile;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.NetworkCost
export interface NetworkCost {
	AvgBitrate: string;
	PreloadTime: string;
	CostBandwidth: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.VideoStream
export interface VideoStream {
	Height: string;
	Dar: string;
	NumFrames: string;
	CodecName: string;
	Profile: string;
	Fps: string;
	Timebase: string;
	Bitrate: string;
	Sar: string;
	Level: string;
	PixFmt: string;
	CodecTag: string;
	CodecTagString: string;
	Index: string;
	Lang: string;
	HasBFrames: string;
	Width: string;
	StartTime: string;
	Rotate: string;
	Duration: string;
	CodecTimeBase: string;
	CodecLongName: string;
	AvgFPS: string;
	NetworkCost: NetworkCost;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.VideoStreamListInQueryVideoPoseJobList
export interface VideoStreamListInQueryVideoPoseJobList {
	VideoStream: VideoStream[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.SubtitleStream
export interface SubtitleStream {
	StartTime: string;
	CodecName: string;
	Duration: string;
	CodecTimeBase: string;
	Timebase: string;
	CodecTag: string;
	CodecTagString: string;
	CodecLongName: string;
	Index: string;
	Lang: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.SubtitleStreamListInQueryComplexJobList
export interface SubtitleStreamListInQueryComplexJobList {
	SubtitleStream: SubtitleStream[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.AudioStream
export interface AudioStream {
	NumFrames: string;
	CodecName: string;
	Timebase: string;
	Bitrate: string;
	SampleFmt: string;
	CodecTag: string;
	CodecTagString: string;
	Index: string;
	Channels: string;
	Lang: string;
	StartTime: string;
	Samplerate: string;
	Duration: string;
	CodecTimeBase: string;
	CodecLongName: string;
	ChannelLayout: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.AudioStreamListInQueryVideoPoseJobList
export interface AudioStreamListInQueryVideoPoseJobList {
	AudioStream: AudioStream[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.Streams
export interface Streams {
	VideoStreamList: VideoStreamListInQueryVideoPoseJobList;
	SubtitleStreamList: SubtitleStreamListInQueryComplexJobList;
	AudioStreamList: AudioStreamListInQueryVideoPoseJobList;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.Format
export interface Format {
	FormatName: string;
	NumPrograms: string;
	StartTime: string;
	FormatLongName: string;
	Duration: string;
	Size: string;
	Bitrate: string;
	NumStreams: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.SourceLogo
export interface SourceLogo {
	Source: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.SourceLogos
export interface SourceLogos {
	SourceLogo: SourceLogo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.Properties
export interface Properties {
	Height: string;
	Width: string;
	FileSize: string;
	Duration: string;
	Fps: string;
	Bitrate: string;
	FileFormat: string;
	Streams: Streams;
	Format: Format;
	SourceLogos: SourceLogos;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.MNSMessageResult
export interface MNSMessageResult {
	MessageId: string;
	ErrorMessage: string;
	ErrorCode: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.VideoPoseJob
export interface VideoPoseJob {
	JobId: string;
	PipelineId: string;
	UserData: string;
	State: string;
	Input: Input;
	OutputConfig: OutputConfig;
	Properties: Properties;
	MNSMessageResult: MNSMessageResult;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.SubmitVideoPoseJobResponse
export interface SubmitVideoPoseJobResponse {
	RequestId: string;
	VideoPoseJob: VideoPoseJob;
}

