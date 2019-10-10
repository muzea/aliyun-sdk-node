// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.RealtimeLogDeliveryInfo
export interface RealtimeLogDeliveryInfo {
	Project: string;
	Logstore: string;
	Region: string;
	DomainName: string;
	DmId: number;
	Status: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.ContentInListLiveRealtimeLogDelivery
export interface ContentInListLiveRealtimeLogDelivery {
	RealtimeLogDeliveryInfo: RealtimeLogDeliveryInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.ListLiveRealtimeLogDeliveryResponse
export interface ListLiveRealtimeLogDeliveryResponse {
	RequestId: string;
	Content: ContentInListLiveRealtimeLogDelivery;
}

