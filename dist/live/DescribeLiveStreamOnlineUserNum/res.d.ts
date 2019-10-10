// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.Info
export interface Info {
	Online: number;
	DownFlow: number;
	TranscodeTemplate: string;
	Rate: string;
	UserNumber: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.InfosInDescribeLiveDomainOnlineUserNum
export interface InfosInDescribeLiveDomainOnlineUserNum {
	Info: Info[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.LiveStreamOnlineUserNumInfo
export interface LiveStreamOnlineUserNumInfo {
	Time: string;
	StreamUrl: string;
	StreamName: string;
	UserNumber: number;
	Infos: InfosInDescribeLiveDomainOnlineUserNum;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.OnlineUserInfoInDescribeLiveStreamOnlineUserNum
export interface OnlineUserInfoInDescribeLiveStreamOnlineUserNum {
	LiveStreamOnlineUserNumInfo: LiveStreamOnlineUserNumInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.DescribeLiveStreamOnlineUserNumResponse
export interface DescribeLiveStreamOnlineUserNumResponse {
	RequestId: string;
	TotalUserNumber: number;
	OnlineUserInfo: OnlineUserInfoInDescribeLiveStreamOnlineUserNum;
}

