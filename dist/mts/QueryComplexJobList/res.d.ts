// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.NonExistJobIdsInQueryComplexJobList
export interface NonExistJobIdsInQueryComplexJobList {
	String: string[];
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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.OutputFile
export interface OutputFile {
	Bucket: string;
	Object: string;
	Location: string;
	RoleArn: string;
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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.Container
export interface Container {
	Format: string;
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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.TailSlate
export interface TailSlate {
	Height: string;
	Width: string;
	TailUrl: string;
	IsMergeAudio: boolean;
	Start: string;
	BgColor: string;
	BlendDuration: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.TailSlateListInListJob
export interface TailSlateListInListJob {
	TailSlate: TailSlate[];
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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.WaterMarkListInListJob
export interface WaterMarkListInListJob {
	WaterMark: WaterMark[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.Merge
export interface Merge {
	MergeURL: string;
	Duration: string;
	Start: string;
	RoleArn: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.MergeListInListJob
export interface MergeListInListJob {
	Merge: Merge[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.OutSubtitleFile
export interface OutSubtitleFile {
	Bucket: string;
	Object: string;
	Location: string;
	RoleArn: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.OutSubtitle
export interface OutSubtitle {
	Map: string;
	Message: string;
	Success: boolean;
	OutSubtitleFile: OutSubtitleFile;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.OutSubtitleListInListJob
export interface OutSubtitleListInListJob {
	OutSubtitle: OutSubtitle[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.Opening
export interface Opening {
	Height: string;
	Width: string;
	openUrl: string;
	Start: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.OpeningListInListJob
export interface OpeningListInListJob {
	Opening: Opening[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.Amix
export interface Amix {
	AmixURL: string;
	Map: string;
	MixDurMode: string;
	Start: string;
	Duration: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.AmixList
export interface AmixList {
	Amix: Amix[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.Output
export interface Output {
	TemplateId: string;
	DeWatermark: string;
	MergeConfigUrl: string;
	UserData: string;
	Rotate: string;
	AudioStreamMap: string;
	VideoStreamMap: string;
	Priority: string;
	WaterMarkConfigUrl: string;
	Properties: Properties;
	MuxConfig: MuxConfig;
	DigiWaterMark: DigiWaterMark;
	Video: Video;
	Clip: Clip;
	OutputFile: OutputFile;
	M3U8NonStandardSupport: M3U8NonStandardSupport;
	Audio: Audio;
	TransConfig: TransConfig;
	SubtitleConfig: SubtitleConfig;
	Container: Container;
	Encryption: Encryption;
	SuperReso: SuperReso;
	TailSlateList: TailSlateListInListJob;
	WaterMarkList: WaterMarkListInListJob;
	MergeList: MergeListInListJob;
	OutSubtitleList: OutSubtitleListInListJob;
	OpeningList: OpeningListInListJob;
	AmixList: AmixList;
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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.BeautifyConfig
export interface BeautifyConfig {
	OutputFile: OutputFile;
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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.WaterMarkListInQueryEditingJobList
export interface WaterMarkListInQueryEditingJobList {
	WaterMark: WaterMark[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.MergeListInQueryEditingJobList
export interface MergeListInQueryEditingJobList {
	Merge: Merge[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.EditingConfig
export interface EditingConfig {
	TemplateId: string;
	DeWatermark: string;
	MergeConfigUrl: string;
	UserData: string;
	Rotate: string;
	AudioStreamMap: string;
	VideoStreamMap: string;
	Priority: string;
	WaterMarkConfigUrl: string;
	Properties: Properties;
	DigiWaterMark: DigiWaterMark;
	Video: Video;
	Clip: Clip;
	MuxConfig: MuxConfig;
	OutputFile: OutputFile;
	M3U8NonStandardSupport: M3U8NonStandardSupport;
	Audio: Audio;
	SubtitleConfig: SubtitleConfig;
	Editing: Editing;
	Container: Container;
	TransConfig: TransConfig;
	Encryption: Encryption;
	SuperReso: SuperReso;
	WaterMarkList: WaterMarkListInQueryEditingJobList;
	MergeList: MergeListInQueryEditingJobList;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.PornVideo
export interface PornVideo {
	Suggestion: string;
	Score: string;
	Time: string;
	Object: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.PornVideos
export interface PornVideos {
	PornVideo: PornVideo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.PornAudio
export interface PornAudio {
	Suggestion: string;
	Score: string;
	StartTime: string;
	EndTime: string;
	Text: string;
	Object: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.PornAudios
export interface PornAudios {
	PornAudio: PornAudio[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.PornText
export interface PornText {
	Suggestion: string;
	Score: string;
	Text: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.PornTexts
export interface PornTexts {
	PornText: PornText[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.PornImage
export interface PornImage {
	Suggestion: string;
	Score: string;
	Url: string;
	Text: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.PornImages
export interface PornImages {
	PornImage: PornImage[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.PornOcr
export interface PornOcr {
	Suggestion: string;
	Score: string;
	Time: string;
	Object: string;
	Text: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.PornOcrs
export interface PornOcrs {
	PornOcr: PornOcr[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.PornResult
export interface PornResult {
	PornVideos: PornVideos;
	PornAudios: PornAudios;
	PornTexts: PornTexts;
	PornImages: PornImages;
	PornOcrs: PornOcrs;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.PoliticsVideo
export interface PoliticsVideo {
	Suggestion: string;
	Score: string;
	Time: string;
	Object: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.PoliticsVideos
export interface PoliticsVideos {
	PoliticsVideo: PoliticsVideo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.PoliticsAudio
export interface PoliticsAudio {
	Suggestion: string;
	Score: string;
	StartTime: string;
	EndTime: string;
	Text: string;
	Object: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.PoliticsAudios
export interface PoliticsAudios {
	PoliticsAudio: PoliticsAudio[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.PoliticsText
export interface PoliticsText {
	Suggestion: string;
	Score: string;
	Text: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.PoliticsTexts
export interface PoliticsTexts {
	PoliticsText: PoliticsText[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.PoliticsImage
export interface PoliticsImage {
	Suggestion: string;
	Score: string;
	Url: string;
	Text: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.PoliticsImages
export interface PoliticsImages {
	PoliticsImage: PoliticsImage[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.PoliticsOcr
export interface PoliticsOcr {
	Suggestion: string;
	Score: string;
	Time: string;
	Object: string;
	Text: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.PoliticsOcrs
export interface PoliticsOcrs {
	PoliticsOcr: PoliticsOcr[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.PoliticsResult
export interface PoliticsResult {
	PoliticsVideos: PoliticsVideos;
	PoliticsAudios: PoliticsAudios;
	PoliticsTexts: PoliticsTexts;
	PoliticsImages: PoliticsImages;
	PoliticsOcrs: PoliticsOcrs;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.QrcodeVideo
export interface QrcodeVideo {
	Suggestion: string;
	Score: string;
	Time: string;
	Object: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.QrcodeVideos
export interface QrcodeVideos {
	QrcodeVideo: QrcodeVideo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.QrcodeImage
export interface QrcodeImage {
	Suggestion: string;
	Score: string;
	Url: string;
	Text: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.QrcodeImages
export interface QrcodeImages {
	QrcodeImage: QrcodeImage[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.QrcodeResult
export interface QrcodeResult {
	QrcodeVideos: QrcodeVideos;
	QrcodeImages: QrcodeImages;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.ContrabandAudio
export interface ContrabandAudio {
	Suggestion: string;
	Score: string;
	StartTime: string;
	EndTime: string;
	Text: string;
	Object: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.ContrabandAudios
export interface ContrabandAudios {
	ContrabandAudio: ContrabandAudio[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.ContrabandText
export interface ContrabandText {
	Suggestion: string;
	Score: string;
	Text: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.ContrabandTexts
export interface ContrabandTexts {
	ContrabandText: ContrabandText[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.ContrabandOcr
export interface ContrabandOcr {
	Suggestion: string;
	Score: string;
	Time: string;
	Object: string;
	Text: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.ContrabandOcrs
export interface ContrabandOcrs {
	ContrabandOcr: ContrabandOcr[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.ContrabandResult
export interface ContrabandResult {
	ContrabandAudios: ContrabandAudios;
	ContrabandTexts: ContrabandTexts;
	ContrabandOcrs: ContrabandOcrs;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.AbuseAudio
export interface AbuseAudio {
	Suggestion: string;
	Score: string;
	StartTime: string;
	EndTime: string;
	Text: string;
	Object: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.AbuseAudios
export interface AbuseAudios {
	AbuseAudio: AbuseAudio[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.AbuseText
export interface AbuseText {
	Suggestion: string;
	Score: string;
	Text: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.AbuseTexts
export interface AbuseTexts {
	AbuseText: AbuseText[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.AbuseOcr
export interface AbuseOcr {
	Suggestion: string;
	Score: string;
	Time: string;
	Object: string;
	Text: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.AbuseOcrs
export interface AbuseOcrs {
	AbuseOcr: AbuseOcr[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.AbuseResult
export interface AbuseResult {
	AbuseAudios: AbuseAudios;
	AbuseTexts: AbuseTexts;
	AbuseOcrs: AbuseOcrs;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.AdVideo
export interface AdVideo {
	Suggestion: string;
	Score: string;
	Time: string;
	Object: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.AdVideos
export interface AdVideos {
	AdVideo: AdVideo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.AdAudio
export interface AdAudio {
	Suggestion: string;
	Score: string;
	StartTime: string;
	EndTime: string;
	Text: string;
	Object: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.AdAudios
export interface AdAudios {
	AdAudio: AdAudio[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.AdText
export interface AdText {
	Suggestion: string;
	Score: string;
	Text: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.AdTexts
export interface AdTexts {
	AdText: AdText[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.AdImage
export interface AdImage {
	Suggestion: string;
	Score: string;
	Url: string;
	Text: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.AdImages
export interface AdImages {
	AdImage: AdImage[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.AdOcr
export interface AdOcr {
	Suggestion: string;
	Score: string;
	Time: string;
	Object: string;
	Text: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.AdOcrs
export interface AdOcrs {
	AdOcr: AdOcr[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.AdResult
export interface AdResult {
	AdVideos: AdVideos;
	AdAudios: AdAudios;
	AdTexts: AdTexts;
	AdImages: AdImages;
	AdOcrs: AdOcrs;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.TerrorismVideo
export interface TerrorismVideo {
	Suggestion: string;
	Score: string;
	Time: string;
	Object: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.TerrorismVideos
export interface TerrorismVideos {
	TerrorismVideo: TerrorismVideo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.TerrorismAudio
export interface TerrorismAudio {
	Suggestion: string;
	Score: string;
	StartTime: string;
	EndTime: string;
	Text: string;
	Object: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.TerrorismAudios
export interface TerrorismAudios {
	TerrorismAudio: TerrorismAudio[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.TerrorismText
export interface TerrorismText {
	Suggestion: string;
	Score: string;
	Text: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.TerrorismTexts
export interface TerrorismTexts {
	TerrorismText: TerrorismText[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.TerrorismImage
export interface TerrorismImage {
	Suggestion: string;
	Score: string;
	Url: string;
	Text: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.TerrorismImages
export interface TerrorismImages {
	TerrorismImage: TerrorismImage[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.TerrorismOcr
export interface TerrorismOcr {
	Suggestion: string;
	Score: string;
	Time: string;
	Object: string;
	Text: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.TerrorismOcrs
export interface TerrorismOcrs {
	TerrorismOcr: TerrorismOcr[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.TerrorismResult
export interface TerrorismResult {
	TerrorismVideos: TerrorismVideos;
	TerrorismAudios: TerrorismAudios;
	TerrorismTexts: TerrorismTexts;
	TerrorismImages: TerrorismImages;
	TerrorismOcrs: TerrorismOcrs;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.LiveVideo
export interface LiveVideo {
	Suggestion: string;
	Score: string;
	Time: string;
	Object: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.LiveVideos
export interface LiveVideos {
	LiveVideo: LiveVideo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.LiveImage
export interface LiveImage {
	Suggestion: string;
	Score: string;
	Url: string;
	Text: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.LiveImages
export interface LiveImages {
	LiveImage: LiveImage[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.LiveResult
export interface LiveResult {
	LiveVideos: LiveVideos;
	LiveImages: LiveImages;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.LogoVideo
export interface LogoVideo {
	Suggestion: string;
	Score: string;
	Time: string;
	Object: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.LogoVideos
export interface LogoVideos {
	LogoVideo: LogoVideo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.LogoImage
export interface LogoImage {
	Suggestion: string;
	Score: string;
	Url: string;
	Text: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.LogoImages
export interface LogoImages {
	LogoImage: LogoImage[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.LogoResult
export interface LogoResult {
	LogoVideos: LogoVideos;
	LogoImages: LogoImages;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.SpamAudio
export interface SpamAudio {
	Suggestion: string;
	Score: string;
	StartTime: string;
	EndTime: string;
	Text: string;
	Object: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.SpamAudios
export interface SpamAudios {
	SpamAudio: SpamAudio[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.SpamText
export interface SpamText {
	Suggestion: string;
	Score: string;
	Text: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.SpamTexts
export interface SpamTexts {
	SpamText: SpamText[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.SpamOcr
export interface SpamOcr {
	Suggestion: string;
	Score: string;
	Time: string;
	Object: string;
	Text: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.SpamOcrs
export interface SpamOcrs {
	SpamOcr: SpamOcr[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.SpamResult
export interface SpamResult {
	SpamAudios: SpamAudios;
	SpamTexts: SpamTexts;
	SpamOcrs: SpamOcrs;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.ImageSearchShotsItem
export interface ImageSearchShotsItem {
	MatchedTimestamp: string;
	MatchedFrame: string;
	Similarity: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.ImageSearchShots
export interface ImageSearchShots {
	ImageSearchShotsItem: ImageSearchShotsItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.Result
export interface Result {
	Message: string;
	Code: string;
	Label: string;
	Rate: string;
	Score: string;
	Suggestion: string;
	Scene: string;
	PornResult: PornResult;
	PoliticsResult: PoliticsResult;
	QrcodeResult: QrcodeResult;
	ContrabandResult: ContrabandResult;
	AbuseResult: AbuseResult;
	AdResult: AdResult;
	TerrorismResult: TerrorismResult;
	LiveResult: LiveResult;
	LogoResult: LogoResult;
	SpamResult: SpamResult;
	ImageSearchShots: ImageSearchShots;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.Category
export interface Category {
	Score: string;
	CateId: string;
	Label: string;
	ParentId: string;
	Level: string;
	CateName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.Categories
export interface Categories {
	Category: Category[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.CategoryResult
export interface CategoryResult {
	Details: string;
	Categories: Categories;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.MNSMessageResult
export interface MNSMessageResult {
	MessageId: string;
	ErrorMessage: string;
	ErrorCode: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.VideoSplit
export interface VideoSplit {
	StartTime: string;
	EndTime: string;
	Path: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.VideoSplitList
export interface VideoSplitList {
	VideoSplit: VideoSplit[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.VideoSplitResult
export interface VideoSplitResult {
	VideoSplitList: VideoSplitList;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.MediaDetailConfig
export interface MediaDetailConfig {
	Scenario: string;
	DetailType: string;
	OutputFile: OutputFile;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.VideoGifResult
export interface VideoGifResult {
	OutputFile: OutputFile;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.AsrConfig
export interface AsrConfig {
	Scene: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.TagsInQueryMediaDetailJobList
export interface TagsInQueryMediaDetailJobList {
	String: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.FrameTags
export interface FrameTags {
	String: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.Celebrity
export interface Celebrity {
	Name: string;
	Score: string;
	Target: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.CelebritiesInQueryMediaDetailJobList
export interface CelebritiesInQueryMediaDetailJobList {
	Celebrity: Celebrity[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.Sensitive
export interface Sensitive {
	Name: string;
	Score: string;
	Target: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.Sensitives
export interface Sensitives {
	Sensitive: Sensitive[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.Politician
export interface Politician {
	Name: string;
	Score: string;
	Target: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.Politicians
export interface Politicians {
	Politician: Politician[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.FrameTagInfo
export interface FrameTagInfo {
	Category: string;
	Score: string;
	Tag: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.FrameTagInfosInQueryMediaDetailJobList
export interface FrameTagInfosInQueryMediaDetailJobList {
	FrameTagInfo: FrameTagInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.ClipsInQueryMediaDetailJobList
export interface ClipsInQueryMediaDetailJobList {
	Clip: Clip[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.Custom
export interface Custom {
	Name: string;
	Clips: ClipsInQueryMediaDetailJobList;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.Customs
export interface Customs {
	Custom: Custom[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.MediaDetailRecgResult
export interface MediaDetailRecgResult {
	ImageUrl: string;
	Time: string;
	OcrText: string;
	FrameTags: FrameTags;
	Celebrities: CelebritiesInQueryMediaDetailJobList;
	Sensitives: Sensitives;
	Politicians: Politicians;
	FrameTagInfos: FrameTagInfosInQueryMediaDetailJobList;
	Customs: Customs;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.MediaDetailRecgResults
export interface MediaDetailRecgResults {
	MediaDetailRecgResult: MediaDetailRecgResult[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.MediaDetailResult
export interface MediaDetailResult {
	Status: string;
	Tags: TagsInQueryMediaDetailJobList;
	MediaDetailRecgResults: MediaDetailRecgResults;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.AsrText
export interface AsrText {
	SpeechRate: string;
	Text: string;
	EndTime: string;
	ChannelId: string;
	StartTime: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.AsrTextListInQueryMcuJob
export interface AsrTextListInQueryMcuJob {
	AsrText: AsrText[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.AsrResult
export interface AsrResult {
	Duration: string;
	AsrTextList: AsrTextListInQueryMcuJob;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.WaterMarkListInQueryComplexJobList
export interface WaterMarkListInQueryComplexJobList {
	WaterMark: WaterMark[];
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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.VideoSummary
export interface VideoSummary {
	StartTime: string;
	EndTime: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.VideoSummaryList
export interface VideoSummaryList {
	VideoSummary: VideoSummary[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.VideoSummaryResult
export interface VideoSummaryResult {
	OutputFile: OutputFile;
	VideoSummaryList: VideoSummaryList;
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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.InputsInQueryComplexJobList
export interface InputsInQueryComplexJobList {
	InputsItem: InputsItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.EditingInputsInQueryEditingJobList
export interface EditingInputsInQueryEditingJobList {
	EditingInput: EditingInput[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.FrameTagInfosInQueryMcuJob
export interface FrameTagInfosInQueryMcuJob {
	FrameTagInfo: FrameTagInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.Tag
export interface Tag {
	Time: string;
	ImageUrl: string;
	ImageId: string;
	FrameTagInfos: FrameTagInfosInQueryMcuJob;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.TagResult
export interface TagResult {
	Tag: Tag[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.Ocr
export interface Ocr {
	Time: string;
	OcrText: string;
	ImageUrl: string;
	ImageId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.OcrResult
export interface OcrResult {
	Ocr: Ocr[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.ComplexEditingConfigsItem
export interface ComplexEditingConfigsItem {
	Editing: Editing;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.ComplexEditingConfigsInQueryComplexJobList
export interface ComplexEditingConfigsInQueryComplexJobList {
	ComplexEditingConfigsItem: ComplexEditingConfigsItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.CelebritiesInQueryMcuJob
export interface CelebritiesInQueryMcuJob {
	Celebrity: Celebrity[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.Face
export interface Face {
	Name: string;
	Time: string;
	Score: string;
	ImageUrl: string;
	ImageId: string;
	Target: string;
	Celebrities: CelebritiesInQueryMcuJob;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.FaceResult
export interface FaceResult {
	Face: Face[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.Job
export interface Job {
	TemplateId: string;
	ResultOutputFile: string;
	UserData: string;
	PipelineId: string;
	Template: string;
	Percent: number;
	Id: string;
	JobId: string;
	Message: string;
	Code: string;
	CreationTime: string;
	FinishTime: string;
	State: string;
	Output: Output;
	OutputConfig: OutputConfig;
	BeautifyConfig: BeautifyConfig;
	EditingConfig: EditingConfig;
	Input: Input;
	Result: Result;
	CategoryResult: CategoryResult;
	Properties: Properties;
	MNSMessageResult: MNSMessageResult;
	VideoSplitResult: VideoSplitResult;
	MediaDetailConfig: MediaDetailConfig;
	VideoGifResult: VideoGifResult;
	AsrConfig: AsrConfig;
	MediaDetailResult: MediaDetailResult;
	AsrResult: AsrResult;
	transcodeOutput: TranscodeOutput;
	VideoSummaryResult: VideoSummaryResult;
	Inputs: InputsInQueryComplexJobList;
	EditingInputs: EditingInputsInQueryEditingJobList;
	TagResult: TagResult;
	OcrResult: OcrResult;
	ComplexEditingConfigs: ComplexEditingConfigsInQueryComplexJobList;
	FaceResult: FaceResult;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.JobListInQueryComplexJobList
export interface JobListInQueryComplexJobList {
	Job: Job[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.QueryComplexJobListResponse
export interface QueryComplexJobListResponse {
	RequestId: string;
	NonExistJobIds: NonExistJobIdsInQueryComplexJobList;
	JobList: JobListInQueryComplexJobList;
}

