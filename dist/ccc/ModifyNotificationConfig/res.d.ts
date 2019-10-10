// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.SubscriptionsItem
export interface SubscriptionsItem {
	Name: string;
	Selected: boolean;
	DisplayName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.Subscriptions
export interface Subscriptions {
	SubscriptionsItem: SubscriptionsItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.ModifyNotificationConfigResponse
export interface ModifyNotificationConfigResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Message: string;
	HttpStatusCode: number;
	ProducerId: string;
	AccessPoint: string;
	Topic: string;
	Subscriptions: Subscriptions;
}

