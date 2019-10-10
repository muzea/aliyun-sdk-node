// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.AudioStream
export interface AudioStream {
	Index: string;
	CodecName: string;
	CodecLongName: string;
	CodecTimeBase: string;
	CodecTagString: string;
	CodecTag: string;
	SampleFmt: string;
	SampleRate: string;
	Channels: string;
	ChannelLayout: string;
	Timebase: string;
	StartTime: string;
	Duration: string;
	Bitrate: string;
	NumFrames: string;
	Lang: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.VideoStream
export interface VideoStream {
	Index: string;
	CodecName: string;
	CodecLongName: string;
	Profile: string;
	CodecTimeBase: string;
	CodecTagString: string;
	CodecTag: string;
	Width: string;
	Height: string;
	HasBFrames: string;
	Sar: string;
	Dar: string;
	PixFmt: string;
	Level: string;
	Fps: string;
	AvgFPS: string;
	Timebase: string;
	StartTime: string;
	Duration: string;
	NumFrames: string;
	Lang: string;
	Rotate: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.MezzanineInGetMezzanineInfo
export interface MezzanineInGetMezzanineInfo {
	VideoId: string;
	Bitrate: string;
	CreationTime: string;
	Duration: string;
	Fps: string;
	Height: number;
	Width: number;
	Size: number;
	Status: string;
	FileURL: string;
	FileName: string;
	CRC64: string;
	PreprocessStatus: string;
	OutputType: string;
	AudioStreamList: AudioStream[];
	VideoStreamList: VideoStream[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.GetMezzanineInfoResponse
export interface GetMezzanineInfoResponse {
	RequestId: string;
	Mezzanine: MezzanineInGetMezzanineInfo;
}

