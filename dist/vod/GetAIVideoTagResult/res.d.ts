// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.CategoryItem
export interface CategoryItem {
	Tag: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.PersonItem
export interface PersonItem {
	FaceUrl: string;
	Tag: string;
	Times: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.TimeItem
export interface TimeItem {
	Tag: string;
	Times: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.LocationItem
export interface LocationItem {
	Tag: string;
	Times: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.KeywordItem
export interface KeywordItem {
	Tag: string;
	Times: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.VideoTagResult
export interface VideoTagResult {
	Category: CategoryItem[];
	Person: PersonItem[];
	Time: TimeItem[];
	Location: LocationItem[];
	Keyword: KeywordItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.GetAIVideoTagResultResponse
export interface GetAIVideoTagResultResponse {
	RequestId: string;
	VideoTagResult: VideoTagResult;
}

