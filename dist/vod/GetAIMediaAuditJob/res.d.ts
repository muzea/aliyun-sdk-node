// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.TopListItem
export interface TopListItem {
	Score: string;
	Timestamp: string;
	Label: string;
	Url: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.CounterListItem
export interface CounterListItem {
	Count: number;
	Label: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.TerrorismResult
export interface TerrorismResult {
	MaxScore: string;
	Suggestion: string;
	Label: string;
	AverageScore: string;
	TopList: TopListItem[];
	CounterList: CounterListItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.PornResult
export interface PornResult {
	MaxScore: string;
	Suggestion: string;
	Label: string;
	AverageScore: string;
	TopList: TopListItem[];
	CounterList: CounterListItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.VideoResult
export interface VideoResult {
	Suggestion: string;
	Label: string;
	TerrorismResult: TerrorismResult;
	PornResult: PornResult;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.TextResultItem
export interface TextResultItem {
	Score: string;
	Content: string;
	Suggestion: string;
	Label: string;
	Scene: string;
	Type: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.ResultItem
export interface ResultItem {
	Score: string;
	Suggestion: string;
	Label: string;
	Scene: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.ImageResultItem
export interface ImageResultItem {
	Suggestion: string;
	Label: string;
	Type: string;
	Url: string;
	Result: ResultItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.Data
export interface Data {
	Suggestion: string;
	Label: string;
	AbnormalModules: string;
	VideoResult: VideoResult;
	TextResult: TextResultItem[];
	ImageResult: ImageResultItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.MediaAuditJob
export interface MediaAuditJob {
	JobId: string;
	MediaId: string;
	Type: string;
	Status: string;
	Code: string;
	Message: string;
	CreationTime: string;
	CompleteTime: string;
	Data: Data;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.GetAIMediaAuditJobResponse
export interface GetAIMediaAuditJobResponse {
	RequestId: string;
	MediaAuditJob: MediaAuditJob;
}

