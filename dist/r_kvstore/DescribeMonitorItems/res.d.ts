// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.KVStoreMonitorItem
export interface KVStoreMonitorItem {
	MonitorKey: string;
	Unit: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.MonitorItems
export interface MonitorItems {
	KVStoreMonitorItem: KVStoreMonitorItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.DescribeMonitorItemsResponse
export interface DescribeMonitorItemsResponse {
	RequestId: string;
	MonitorItems: MonitorItems;
}

