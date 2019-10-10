// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.StorageDataItem
export interface StorageDataItem {
	TimeStamp: string;
	StorageUtilization: string;
	NetworkOut: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.StorageData
export interface StorageData {
	StorageDataItem: StorageDataItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.DescribeVodStorageDataResponse
export interface DescribeVodStorageDataResponse {
	RequestId: string;
	DataInterval: string;
	StorageData: StorageData;
}

