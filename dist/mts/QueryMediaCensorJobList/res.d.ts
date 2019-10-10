// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.NonExistIdsInQueryMediaCensorJobList
export interface NonExistIdsInQueryMediaCensorJobList {
	String: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.TitleCensorResult
export interface TitleCensorResult {
	Label: string;
	Suggestion: string;
	Scene: string;
	Rate: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.DescCensorResult
export interface DescCensorResult {
	Label: string;
	Suggestion: string;
	Scene: string;
	Rate: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.BarrageCensorResult
export interface BarrageCensorResult {
	Label: string;
	Suggestion: string;
	Scene: string;
	Rate: string;
}

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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.OutputFile
export interface OutputFile {
	Bucket: string;
	Object: string;
	Location: string;
	RoleArn: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.VideoCensorConfig
export interface VideoCensorConfig {
	BizType: string;
	VideoCensor: string;
	OutputFile: OutputFile;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.CensorResult
export interface CensorResult {
	Label: string;
	Suggestion: string;
	Scene: string;
	Rate: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.CensorResultsInQueryMediaCensorJobList
export interface CensorResultsInQueryMediaCensorJobList {
	CensorResult: CensorResult[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.VideoTimeline
export interface VideoTimeline {
	Timestamp: string;
	Object: string;
	CensorResults: CensorResultsInQueryMediaCensorJobList;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.VideoTimelinesInQueryMediaCensorJobList
export interface VideoTimelinesInQueryMediaCensorJobList {
	VideoTimeline: VideoTimeline[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.VensorCensorResult
export interface VensorCensorResult {
	NextPageToken: string;
	VideoTimelines: VideoTimelinesInQueryMediaCensorJobList;
	CensorResults: CensorResultsInQueryMediaCensorJobList;
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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.ResultsInQueryMediaCensorJobList
export interface ResultsInQueryMediaCensorJobList {
	Result: Result[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.CoverImageCensorResult
export interface CoverImageCensorResult {
	Bucket: string;
	Object: string;
	Location: string;
	Results: ResultsInQueryMediaCensorJobList;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.CoverImageCensorResultsInQueryMediaCensorJobList
export interface CoverImageCensorResultsInQueryMediaCensorJobList {
	CoverImageCensorResult: CoverImageCensorResult[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.MediaCensorJob
export interface MediaCensorJob {
	JobId: string;
	UserData: string;
	PipelineId: string;
	State: string;
	Code: string;
	Suggestion: string;
	Message: string;
	CreationTime: string;
	FinishTime: string;
	TitleCensorResult: TitleCensorResult;
	DescCensorResult: DescCensorResult;
	BarrageCensorResult: BarrageCensorResult;
	Input: Input;
	VideoCensorConfig: VideoCensorConfig;
	VensorCensorResult: VensorCensorResult;
	CoverImageCensorResults: CoverImageCensorResultsInQueryMediaCensorJobList;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.MediaCensorJobList
export interface MediaCensorJobList {
	MediaCensorJob: MediaCensorJob[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.QueryMediaCensorJobListResponse
export interface QueryMediaCensorJobListResponse {
	RequestId: string;
	NextPageToken: string;
	NonExistIds: NonExistIdsInQueryMediaCensorJobList;
	MediaCensorJobList: MediaCensorJobList;
}

