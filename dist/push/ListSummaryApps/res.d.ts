// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/push.SummaryAppInfo
export interface SummaryAppInfo {
	AppName: string;
	AppKey: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/push.SummaryAppInfos
export interface SummaryAppInfos {
	SummaryAppInfo: SummaryAppInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/push.ListSummaryAppsResponse
export interface ListSummaryAppsResponse {
	RequestId: string;
	SummaryAppInfos: SummaryAppInfos;
}

