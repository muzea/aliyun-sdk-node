// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.MonitorItem
export interface MonitorItem {
	ItemTime: string;
	ItemValue: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.ClientErrors
export interface ClientErrors {
	MonitorItem: MonitorItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.ServerErrors
export interface ServerErrors {
	MonitorItem: MonitorItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.DescribeApiErrorDataResponse
export interface DescribeApiErrorDataResponse {
	RequestId: string;
	ClientErrors: ClientErrors;
	ServerErrors: ServerErrors;
}

