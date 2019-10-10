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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.OnlineUserInfoInDescribeLiveDomainOnlineUserNum
export interface OnlineUserInfoInDescribeLiveDomainOnlineUserNum {
	LiveStreamOnlineUserNumInfo: LiveStreamOnlineUserNumInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.DescribeLiveDomainOnlineUserNumResponse
export interface DescribeLiveDomainOnlineUserNumResponse {
	RequestId: string;
	StreamCount: number;
	UserCount: number;
	OnlineUserInfo: OnlineUserInfoInDescribeLiveDomainOnlineUserNum;
}

