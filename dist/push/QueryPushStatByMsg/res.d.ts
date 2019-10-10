// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/push.PushStat
export interface PushStat {
	MessageId: string;
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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/push.PushStats
export interface PushStats {
	PushStat: PushStat[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/push.QueryPushStatByMsgResponse
export interface QueryPushStatByMsgResponse {
	RequestId: string;
	PushStats: PushStats;
}

