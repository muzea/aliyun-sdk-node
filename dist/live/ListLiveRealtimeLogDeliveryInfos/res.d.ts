// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.RealtimeLogDeliveryInfos
export interface RealtimeLogDeliveryInfos {
	Project: string;
	Logstore: string;
	Region: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.ContentInListLiveRealtimeLogDeliveryInfos
export interface ContentInListLiveRealtimeLogDeliveryInfos {
	RealtimeLogDeliveryInfos: RealtimeLogDeliveryInfos[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.ListLiveRealtimeLogDeliveryInfosResponse
export interface ListLiveRealtimeLogDeliveryInfosResponse {
	RequestId: string;
	Content: ContentInListLiveRealtimeLogDeliveryInfos;
}

