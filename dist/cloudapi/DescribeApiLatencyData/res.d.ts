// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.MonitorItem
export interface MonitorItem {
	ItemTime: string;
	ItemValue: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.CallLatencys
export interface CallLatencys {
	MonitorItem: MonitorItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.DescribeApiLatencyDataResponse
export interface DescribeApiLatencyDataResponse {
	RequestId: string;
	CallLatencys: CallLatencys;
}

