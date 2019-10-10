// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.StreamCountDetail
export interface StreamCountDetail {
	Format: string;
	VideoDataRate: number;
	Count: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.StreamCountDetails
export interface StreamCountDetails {
	StreamCountDetail: StreamCountDetail[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.StreamCountInfo
export interface StreamCountInfo {
	Count: number;
	Limit: number;
	Type: string;
	StreamCountDetails: StreamCountDetails;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.StreamCountInfos
export interface StreamCountInfos {
	StreamCountInfo: StreamCountInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.DescribeLiveStreamCountResponse
export interface DescribeLiveStreamCountResponse {
	RequestId: string;
	StreamCountInfos: StreamCountInfos;
}

