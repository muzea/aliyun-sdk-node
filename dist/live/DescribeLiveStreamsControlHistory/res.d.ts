// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.LiveStreamControlInfo
export interface LiveStreamControlInfo {
	StreamName: string;
	ClientIP: string;
	Action: string;
	TimeStamp: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.ControlInfo
export interface ControlInfo {
	LiveStreamControlInfo: LiveStreamControlInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.DescribeLiveStreamsControlHistoryResponse
export interface DescribeLiveStreamsControlHistoryResponse {
	RequestId: string;
	ControlInfo: ControlInfo;
}

