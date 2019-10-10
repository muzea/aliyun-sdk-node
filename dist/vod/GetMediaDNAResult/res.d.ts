// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.Input
export interface Input {
	Start: string;
	Duration: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.Duplication
export interface Duplication {
	Start: string;
	Duration: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.DetailItem
export interface DetailItem {
	Input: Input;
	Duplication: Duplication;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.VideoDNAItem
export interface VideoDNAItem {
	PrimaryKey: string;
	Similarity: string;
	Detail: DetailItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.DNAResult
export interface DNAResult {
	VideoDNA: VideoDNAItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.GetMediaDNAResultResponse
export interface GetMediaDNAResultResponse {
	RequestId: string;
	DNAResult: DNAResult;
}

