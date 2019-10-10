// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.Domains
export interface Domains {
	DomainName: string;
	Status: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.ContentInListLiveRealtimeLogDeliveryDomains
export interface ContentInListLiveRealtimeLogDeliveryDomains {
	Domains: Domains[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.ListLiveRealtimeLogDeliveryDomainsResponse
export interface ListLiveRealtimeLogDeliveryDomainsResponse {
	RequestId: string;
	Content: ContentInListLiveRealtimeLogDeliveryDomains;
}

