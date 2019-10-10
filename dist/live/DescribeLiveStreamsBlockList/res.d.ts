// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.StreamUrls
export interface StreamUrls {
	StreamUrl: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.DescribeLiveStreamsBlockListResponse
export interface DescribeLiveStreamsBlockListResponse {
	RequestId: string;
	DomainName: string;
	PageNum: number;
	PageSize: number;
	TotalNum: number;
	TotalPage: number;
	StreamUrls: StreamUrls;
}

