// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.LiveStreamsNotifyConfig
export interface LiveStreamsNotifyConfig {
	DomainName: string;
	NotifyUrl: string;
	AuthType: string;
	AuthKey: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.DescribeLiveStreamsNotifyUrlConfigResponse
export interface DescribeLiveStreamsNotifyUrlConfigResponse {
	RequestId: string;
	LiveStreamsNotifyConfig: LiveStreamsNotifyConfig;
}

