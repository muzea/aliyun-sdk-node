// this file was automatically generated, DO NOT EDIT
// structs
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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.AddTemplateResponse
export interface AddTemplateResponse {
	RequestId: string;
	Template: Template;
}

