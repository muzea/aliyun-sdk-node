// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.MonitorItem
export interface MonitorItem {
	ItemTime: string;
	ItemValue: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.CallSuccesses
export interface CallSuccesses {
	MonitorItem: MonitorItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.CallFails
export interface CallFails {
	MonitorItem: MonitorItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.DescribeApiQpsDataResponse
export interface DescribeApiQpsDataResponse {
	RequestId: string;
	CallSuccesses: CallSuccesses;
	CallFails: CallFails;
}

