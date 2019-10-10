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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.TextResultItem
export interface TextResultItem {
	Score: string;
	Content: string;
	Suggestion: string;
	Label: string;
	Scene: string;
	Type: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.MediaAuditResult
export interface MediaAuditResult {
	AbnormalModules: string;
	Label: string;
	Suggestion: string;
	VideoResult: VideoResult;
	ImageResult: ImageResultItem[];
	TextResult: TextResultItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.GetMediaAuditResultResponse
export interface GetMediaAuditResultResponse {
	RequestId: string;
	MediaAuditResult: MediaAuditResult;
}

