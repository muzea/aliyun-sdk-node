// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.TrafficControlItem
export interface TrafficControlItem {
	TrafficControlItemId: string;
	TrafficControlItemName: string;
	BoundTime: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.TrafficControlItems
export interface TrafficControlItems {
	TrafficControlItem: TrafficControlItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.DescribeTrafficControlsByApiResponse
export interface DescribeTrafficControlsByApiResponse {
	RequestId: string;
	TrafficControlItems: TrafficControlItems;
}

