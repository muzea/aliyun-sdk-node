// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.MediaFormat
export interface MediaFormat {
	NumberStreams: number;
	NumberPrograms: number;
	FormatName: string;
	FormatLongName: string;
	Size: string;
	Duration: string;
	StartTime: string;
	Bitrate: string;
	CreationTime: string;
	Location: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.VideoStream
export interface VideoStream {
	Index: number;
	Language: string;
	CodecName: string;
	CodecLongName: string;
	Profile: string;
	CodecTimeBase: string;
	CodecTagString: string;
	CodecTag: string;
	Width: number;
	Height: number;
	HasBFrames: number;
	SampleAspectRatio: string;
	DisplayAspectRatio: string;
	PixelFormat: string;
	Level: number;
	FrameRrate: string;
	AverageFrameRate: string;
	TimeBase: string;
	StartTime: string;
	Duration: string;
	Bitrate: string;
	Frames: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.AudioStream
export interface AudioStream {
	Index: number;
	CodecName: string;
	CodecLongName: string;
	CodecTimeBase: string;
	CodecTagString: string;
	CodecTag: string;
	SampleFormat: string;
	SampleRate: string;
	Channels: number;
	ChannelLayout: string;
	TimeBase: string;
	StartTime: string;
	Duration: string;
	Bitrate: string;
	Frames: string;
	Language: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.SubtitleStream
export interface SubtitleStream {
	Index: number;
	Language: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.MediaStreams
export interface MediaStreams {
	VideoStreams: VideoStream[];
	AudioStreams: AudioStream[];
	SubtitleStreams: SubtitleStream[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.MediaMeta
export interface MediaMeta {
	MediaFormat: MediaFormat;
	MediaStreams: MediaStreams;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.GetMediaMetaResponse
export interface GetMediaMetaResponse {
	RequestId: string;
	MediaUri: string;
	MediaMeta: MediaMeta;
}

