// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/sae.ListConsumedServices
export interface ListConsumedServices {
	AppId: string;
	Group2Ip: string;
	Name: string;
	Type: string;
	Version: string;
	Groups: string[];
	Ips: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/sae.ListConsumedServicesResponse
export interface ListConsumedServicesResponse {
	Code: string;
	Message: string;
	RequestId: string;
	Success: boolean;
	ErrorCode: string;
	TraceId: string;
	Data: ListConsumedServices[];
}

