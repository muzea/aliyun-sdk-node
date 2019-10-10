// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.LiveStreamUserNumInfo
export interface LiveStreamUserNumInfo {
	StreamTime: string;
	UserNum: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.LiveStreamUserNumInfos
export interface LiveStreamUserNumInfos {
	LiveStreamUserNumInfo: LiveStreamUserNumInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.DescribeLiveStreamHistoryUserNumResponse
export interface DescribeLiveStreamHistoryUserNumResponse {
	RequestId: string;
	LiveStreamUserNumInfos: LiveStreamUserNumInfos;
}

