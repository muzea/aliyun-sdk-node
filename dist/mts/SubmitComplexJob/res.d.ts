// this file was automatically generated, DO NOT EDIT
// structs
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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.TS
export interface TS {
	Md5Support: boolean;
	SizeSupport: boolean;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.M3U8NonStandardSupport
export interface M3U8NonStandardSupport {
	TS: TS;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.InputFile
export interface InputFile {
	Bucket: string;
	Object: string;
	Location: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.DigiWaterMark
export interface DigiWaterMark {
	Alpha: string;
	Type: string;
	InputFile: InputFile;
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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.Subtitle
export interface Subtitle {
	Map: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.SubtitleListInQueryComplexJobList
export interface SubtitleListInQueryComplexJobList {
	Subtitle: Subtitle[];
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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.ExtSubtitle
export interface ExtSubtitle {
	CharEnc: string;
	FontName: string;
	Input: Input;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.ExtSubtitleListInQueryComplexJobList
export interface ExtSubtitleListInQueryComplexJobList {
	ExtSubtitle: ExtSubtitle[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.SubtitleConfig
export interface SubtitleConfig {
	SubtitleList: SubtitleListInQueryComplexJobList;
	ExtSubtitleList: ExtSubtitleListInQueryComplexJobList;
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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.Container
export interface Container {
	Format: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.OutputFile
export interface OutputFile {
	Bucket: string;
	Object: string;
	Location: string;
	RoleArn: string;
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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.Encryption
export interface Encryption {
	Key: string;
	KeyUri: string;
	SkipCnt: string;
	KeyType: string;
	Id: string;
	Type: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.SuperReso
export interface SuperReso {
	IsHalfSample: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.WaterMark
export interface WaterMark {
	Height: string;
	Width: string;
	Dx: string;
	Dy: string;
	WaterMarkTemplateId: string;
	ReferPos: string;
	Type: string;
	InputFile: InputFile;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.WaterMarkListInQueryComplexJobList
export interface WaterMarkListInQueryComplexJobList {
	WaterMark: WaterMark[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.Merge
export interface Merge {
	MergeURL: string;
	Duration: string;
	Start: string;
	RoleArn: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.MergeListInQueryComplexJobList
export interface MergeListInQueryComplexJobList {
	Merge: Merge[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.TranscodeOutput
export interface TranscodeOutput {
	TemplateId: string;
	DeWatermark: string;
	MergeConfigUrl: string;
	UserData: string;
	Priority: string;
	Rotate: string;
	AudioStreamMap: string;
	WaterMarkConfigUrl: string;
	VideoStreamMap: string;
	Properties: Properties;
	M3U8NonStandardSupport: M3U8NonStandardSupport;
	DigiWaterMark: DigiWaterMark;
	Audio: Audio;
	Video: Video;
	SubtitleConfig: SubtitleConfig;
	Clip: Clip;
	MuxConfig: MuxConfig;
	Container: Container;
	OutputFile: OutputFile;
	TransConfig: TransConfig;
	Encryption: Encryption;
	SuperReso: SuperReso;
	WaterMarkList: WaterMarkListInQueryComplexJobList;
	MergeList: MergeListInQueryComplexJobList;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.MNSMessageResult
export interface MNSMessageResult {
	MessageId: string;
	ErrorMessage: string;
	ErrorCode: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.InputConfig
export interface InputConfig {
	DeinterlaceMethod: string;
	IsNormalSar: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.EditingInput
export interface EditingInput {
	Id: string;
	InputFile: InputFile;
	InputConfig: InputConfig;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.EditingInputsInQueryComplexJobList
export interface EditingInputsInQueryComplexJobList {
	EditingInput: EditingInput[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.InputsItem
export interface InputsItem {
	EditingInputs: EditingInputsInQueryComplexJobList;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.InputsInSubmitComplexJob
export interface InputsInSubmitComplexJob {
	InputsItem: InputsItem[];
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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.ClipListInQueryComplexJobList
export interface ClipListInQueryComplexJobList {
	Clip: Clip[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.Editing
export interface Editing {
	Timeline: Timeline;
	ClipList: ClipListInQueryComplexJobList;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.ComplexEditingConfigsItem
export interface ComplexEditingConfigsItem {
	Editing: Editing;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.ComplexEditingConfigsInSubmitComplexJob
export interface ComplexEditingConfigsInSubmitComplexJob {
	ComplexEditingConfigsItem: ComplexEditingConfigsItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.ComplexJob
export interface ComplexJob {
	JobId: string;
	State: string;
	Code: string;
	Message: string;
	Percent: number;
	PipelineId: string;
	CreationTime: string;
	FinishTime: string;
	transcodeOutput: TranscodeOutput;
	MNSMessageResult: MNSMessageResult;
	Inputs: InputsInSubmitComplexJob;
	ComplexEditingConfigs: ComplexEditingConfigsInSubmitComplexJob;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.SubmitComplexJobResponse
export interface SubmitComplexJobResponse {
	RequestId: string;
	ComplexJob: ComplexJob;
}

