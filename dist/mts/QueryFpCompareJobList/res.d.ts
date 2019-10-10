// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.NonExistIdsInQueryFpCompareJobList
export interface NonExistIdsInQueryFpCompareJobList {
	String: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.MasterFile
export interface MasterFile {
	Bucket: string;
	Location: string;
	Object: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.QueryFile
export interface QueryFile {
	Bucket: string;
	Location: string;
	Object: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.MasterMediaFrames
export interface MasterMediaFrames {
	Bucket: string;
	Location: string;
	Object: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.QueryMediaFrames
export interface QueryMediaFrames {
	Bucket: string;
	Location: string;
	Object: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.MatchedFramesDescFile
export interface MatchedFramesDescFile {
	Bucket: string;
	Location: string;
	Object: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.MatchFrameStorage
export interface MatchFrameStorage {
	MasterMediaFrames: MasterMediaFrames;
	QueryMediaFrames: QueryMediaFrames;
	MatchedFramesDescFile: MatchedFramesDescFile;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.MasterMediaInfo
export interface MasterMediaInfo {
	Duration: string;
	FpNum: string;
	Width: string;
	Height: string;
	Fps: string;
	TotalVideoFrame: string;
	AudioBitRate: string;
	AudioChannels: string;
	AudioSampleRate: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.QueryMediaInfo
export interface QueryMediaInfo {
	Duration: string;
	FpNum: string;
	Width: string;
	Height: string;
	Fps: string;
	TotalVideoFrame: string;
	AudioBitRate: string;
	AudioChannels: string;
	AudioSampleRate: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.MediaMatchSegment
export interface MediaMatchSegment {
	QueryStartFrame: string;
	QueryEndFrame: string;
	MasterStartFrame: string;
	MasterEndFrame: string;
	QueryStartTime: string;
	QueryEndTime: string;
	MasterStartTime: string;
	MasterEndTime: string;
	TotalMatchFrameNum: string;
	Score: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.MediaMatchSegments
export interface MediaMatchSegments {
	MediaMatchSegment: MediaMatchSegment[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.FpCompareResult
export interface FpCompareResult {
	MasterMediaInfo: MasterMediaInfo;
	QueryMediaInfo: QueryMediaInfo;
	MediaMatchSegments: MediaMatchSegments;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.FpCompareJob
export interface FpCompareJob {
	Id: string;
	UserData: string;
	PipelineId: string;
	FpDBId: string;
	State: string;
	Code: string;
	Message: string;
	CreationTime: string;
	FinishTime: string;
	MasterFile: MasterFile;
	QueryFile: QueryFile;
	MatchFrameStorage: MatchFrameStorage;
	FpCompareResult: FpCompareResult;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.FpCompareJobList
export interface FpCompareJobList {
	FpCompareJob: FpCompareJob[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.QueryFpCompareJobListResponse
export interface QueryFpCompareJobListResponse {
	RequestId: string;
	NonExistIds: NonExistIdsInQueryFpCompareJobList;
	FpCompareJobList: FpCompareJobList;
}

