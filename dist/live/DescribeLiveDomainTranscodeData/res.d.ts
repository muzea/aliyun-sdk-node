// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.TranscodeDataInfo
export interface TranscodeDataInfo {
	Date: string;
	Total: number;
	Detail: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.TranscodeDataInfos
export interface TranscodeDataInfos {
	TranscodeDataInfo: TranscodeDataInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.DescribeLiveDomainTranscodeDataResponse
export interface DescribeLiveDomainTranscodeDataResponse {
	RequestId: string;
	TranscodeDataInfos: TranscodeDataInfos;
}

