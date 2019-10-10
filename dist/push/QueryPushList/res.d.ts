// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/push.PushMessageInfo
export interface PushMessageInfo {
	MessageId: string;
	PushTime: string;
	Title: string;
	AppKey: number;
	DeviceType: string;
	Body: string;
	AppName: string;
	Type: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/push.PushMessageInfosInQueryPushList
export interface PushMessageInfosInQueryPushList {
	PushMessageInfo: PushMessageInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/push.QueryPushListResponse
export interface QueryPushListResponse {
	RequestId: string;
	HasNext: boolean;
	Page: number;
	PageSize: number;
	PushMessageInfos: PushMessageInfosInQueryPushList;
}

