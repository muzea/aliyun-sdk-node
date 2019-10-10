// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.LiveLazyPullConfig
export interface LiveLazyPullConfig {
	DomainName: string;
	AppName: string;
	PullDomainName: string;
	PullAppName: string;
	PullProtocol: string;
	PullAuthType: string;
	PullAuthKey: string;
	PullArgs: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.LiveLazyPullConfigList
export interface LiveLazyPullConfigList {
	LiveLazyPullConfig: LiveLazyPullConfig[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.DescribeLiveLazyPullStreamConfigResponse
export interface DescribeLiveLazyPullStreamConfigResponse {
	RequestId: string;
	LiveLazyPullConfigList: LiveLazyPullConfigList;
}

