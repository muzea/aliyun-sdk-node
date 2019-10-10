// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.RatioRefer
export interface RatioRefer {
	Height: string;
	Width: string;
	Dx: string;
	Dy: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.TimelineConfigAudio
export interface TimelineConfigAudio {
	Samplerate: string;
	ChannelLayout: string;
	Channels: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.TimelineConfigVideo
export interface TimelineConfigVideo {
	Height: string;
	Width: string;
	ReclosePrec: string;
	Fps: string;
	IsOneTrackData: string;
	RenderRatio: string;
	BgColor: string;
	IsGpuData: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.TimelineConfig
export interface TimelineConfig {
	TimelineConfigAudio: TimelineConfigAudio;
	TimelineConfigVideo: TimelineConfigVideo;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.ClipsConfigVideo
export interface ClipsConfigVideo {
	T: string;
	L: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.ClipsConfig
export interface ClipsConfig {
	ClipsConfigVideo: ClipsConfigVideo;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.TimeSpan
export interface TimeSpan {
	Duration: string;
	Seek: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.Effect
export interface Effect {
	Effect: string;
	EffectConfig: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.EffectsInQueryComplexJobList
export interface EffectsInQueryComplexJobList {
	Effect: Effect[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.Clip
export interface Clip {
	MaxScore: string;
	StartTarget: string;
	Out: string;
	In: string;
	clipID: string;
	SourceStrmMap: string;
	MinScore: string;
	SourceID: string;
	AvgScore: string;
	SourceType: string;
	StartTime: string;
	EndTime: string;
	Id: string;
	EndTarget: string;
	Type: string;
	ClipsConfig: ClipsConfig;
	TimeSpan: TimeSpan;
	Effects: EffectsInQueryComplexJobList;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.ClipsInQueryComplexJobList
export interface ClipsInQueryComplexJobList {
	Clip: Clip[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.Track
export interface Track {
	Order: string;
	Id: string;
	Type: string;
	Clips: ClipsInQueryComplexJobList;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.TrackListInQueryComplexJobList
export interface TrackListInQueryComplexJobList {
	Track: Track[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.Timeline
export interface Timeline {
	Duration: string;
	Start: string;
	TimelineConfig: TimelineConfig;
	TrackList: TrackListInQueryComplexJobList;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.WaterMarkTemplate
export interface WaterMarkTemplate {
	Name: string;
	Height: string;
	Width: string;
	State: string;
	Dx: string;
	Dy: string;
	Id: string;
	ReferPos: string;
	Type: string;
	RatioRefer: RatioRefer;
	Timeline: Timeline;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.AddWaterMarkTemplateResponse
export interface AddWaterMarkTemplateResponse {
	RequestId: string;
	WaterMarkTemplate: WaterMarkTemplate;
}

