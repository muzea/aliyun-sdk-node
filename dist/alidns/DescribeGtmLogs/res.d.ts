// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alidns.Log
export interface Log {
	OperTime: string;
	OperAction: string;
	EntityType: string;
	EntityId: string;
	EntityName: string;
	OperIp: string;
	OperTimestamp: number;
	Id: number;
	Content: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alidns.Logs
export interface Logs {
	Log: Log[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alidns.DescribeGtmLogsResponse
export interface DescribeGtmLogsResponse {
	RequestId: string;
	TotalItems: number;
	TotalPages: number;
	PageSize: number;
	PageNumber: number;
	Logs: Logs;
}

