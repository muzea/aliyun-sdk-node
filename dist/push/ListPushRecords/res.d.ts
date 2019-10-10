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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/push.PushMessageInfosInListPushRecords
export interface PushMessageInfosInListPushRecords {
	PushMessageInfo: PushMessageInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/push.ListPushRecordsResponse
export interface ListPushRecordsResponse {
	RequestId: string;
	Total: number;
	Page: number;
	PageSize: number;
	PushMessageInfos: PushMessageInfosInListPushRecords;
}

