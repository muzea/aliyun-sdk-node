// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.LiveStreamPublishInfo
export interface LiveStreamPublishInfo {
	DomainName: string;
	AppName: string;
	StreamName: string;
	StreamUrl: string;
	PublishTime: string;
	StopTime: string;
	PublishUrl: string;
	ClientAddr: string;
	EdgeNodeAddr: string;
	PublishDomain: string;
	PublishType: string;
	Transcoded: string;
	TranscodeId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.PublishInfo
export interface PublishInfo {
	LiveStreamPublishInfo: LiveStreamPublishInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.DescribeLiveStreamsPublishListResponse
export interface DescribeLiveStreamsPublishListResponse {
	RequestId: string;
	PageNum: number;
	PageSize: number;
	TotalNum: number;
	TotalPage: number;
	PublishInfo: PublishInfo;
}

