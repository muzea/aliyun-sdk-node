// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.LiveStreamOnlineInfo
export interface LiveStreamOnlineInfo {
	DomainName: string;
	AppName: string;
	StreamName: string;
	PublishTime: string;
	PublishUrl: string;
	PublishDomain: string;
	PublishType: string;
	Transcoded: string;
	TranscodeId: string;
	ServerIp: string;
	ClientIp: string;
	VideoCodecId: number;
	VideoDataRate: number;
	FrameRate: number;
	Width: number;
	Height: number;
	AudioCodecId: number;
	AudioDataRate: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.OnlineInfo
export interface OnlineInfo {
	LiveStreamOnlineInfo: LiveStreamOnlineInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.DescribeLiveStreamsOnlineListResponse
export interface DescribeLiveStreamsOnlineListResponse {
	RequestId: string;
	PageNum: number;
	PageSize: number;
	TotalNum: number;
	TotalPage: number;
	OnlineInfo: OnlineInfo;
}

