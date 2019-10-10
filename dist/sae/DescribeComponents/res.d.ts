// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/sae.DataItem
export interface DataItem {
	Name: string;
	AppId: string;
	Expired: boolean;
	EdasContainerVersion: string;
	Group2Ip: string;
	Disabled: boolean;
	Version: string;
	ComponentKey: string;
	ComponentDescription: string;
	Type: string;
	Groups: string[];
	Ips: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/sae.DescribeComponentsResponse
export interface DescribeComponentsResponse {
	RequestId: string;
	Code: string;
	ErrorCode: string;
	Message: string;
	Success: boolean;
	TraceId: string;
	Data: DataItem[];
}

