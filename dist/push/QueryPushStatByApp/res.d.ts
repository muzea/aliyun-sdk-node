// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/push.AppPushStat
export interface AppPushStat {
	Time: string;
	AcceptCount: number;
	SentCount: number;
	ReceivedCount: number;
	OpenedCount: number;
	DeletedCount: number;
	SmsSentCount: number;
	SmsSkipCount: number;
	SmsFailedCount: number;
	SmsReceiveSuccessCount: number;
	SmsReceiveFailedCount: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/push.AppPushStats
export interface AppPushStats {
	AppPushStat: AppPushStat[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/push.QueryPushStatByAppResponse
export interface QueryPushStatByAppResponse {
	RequestId: string;
	AppPushStats: AppPushStats;
}

