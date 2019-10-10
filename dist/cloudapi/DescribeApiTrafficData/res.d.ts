// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.MonitorItem
export interface MonitorItem {
	ItemTime: string;
	ItemValue: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.CallUploads
export interface CallUploads {
	MonitorItem: MonitorItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.CallDownloads
export interface CallDownloads {
	MonitorItem: MonitorItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.DescribeApiTrafficDataResponse
export interface DescribeApiTrafficDataResponse {
	RequestId: string;
	CallUploads: CallUploads;
	CallDownloads: CallDownloads;
}

