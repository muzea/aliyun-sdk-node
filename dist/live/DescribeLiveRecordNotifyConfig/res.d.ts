// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.LiveRecordNotifyConfig
export interface LiveRecordNotifyConfig {
	DomainName: string;
	NotifyUrl: string;
	OnDemandUrl: string;
	NeedStatusNotify: boolean;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.DescribeLiveRecordNotifyConfigResponse
export interface DescribeLiveRecordNotifyConfigResponse {
	RequestId: string;
	LiveRecordNotifyConfig: LiveRecordNotifyConfig;
}

