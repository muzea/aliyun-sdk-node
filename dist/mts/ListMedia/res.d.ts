// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.RunIdListInListMedia
export interface RunIdListInListMedia {
	RunId: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.TagsInListMedia
export interface TagsInListMedia {
	Tag: string[];
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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.MediaInfo
export interface MediaInfo {
	Format: Format;
	Streams: Streams;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.File
export interface File {
	State: string;
	URL: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.Snapshot
export interface Snapshot {
	MediaWorkflowId: string;
	Count: string;
	MediaWorkflowName: string;
	Type: string;
	ActivityName: string;
	File: File;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.SnapshotListInQueryMediaListByURL
export interface SnapshotListInQueryMediaListByURL {
	Snapshot: Snapshot[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.Summary
export interface Summary {
	MediaWorkflowId: string;
	MediaWorkflowName: string;
	Type: string;
	ActivityName: string;
	File: File;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.SummaryListInQueryMediaListByURL
export interface SummaryListInQueryMediaListByURL {
	Summary: Summary[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.Play
export interface Play {
	Height: string;
	Format: string;
	Width: string;
	Duration: string;
	Fps: string;
	MediaWorkflowId: string;
	Size: string;
	Bitrate: string;
	MediaWorkflowName: string;
	Encryption: string;
	ActivityName: string;
	File: File;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.PlayListInQueryMediaListByURL
export interface PlayListInQueryMediaListByURL {
	Play: Play[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.Media
export interface Media {
	Height: string;
	Format: string;
	Title: string;
	Fps: string;
	Bitrate: string;
	CreationTime: string;
	PublishState: string;
	CoverURL: string;
	Width: string;
	Duration: string;
	Size: string;
	CensorState: string;
	MediaId: string;
	Description: string;
	CateId: number;
	RunIdList: RunIdListInListMedia;
	Tags: TagsInListMedia;
	MediaInfo: MediaInfo;
	File: File;
	SnapshotList: SnapshotListInQueryMediaListByURL;
	SummaryList: SummaryListInQueryMediaListByURL;
	PlayList: PlayListInQueryMediaListByURL;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.MediaListInListMedia
export interface MediaListInListMedia {
	Media: Media[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.ListMediaResponse
export interface ListMediaResponse {
	RequestId: string;
	NextPageToken: string;
	MediaList: MediaListInListMedia;
}

