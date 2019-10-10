// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alidns.DomainLog
export interface DomainLog {
	ActionTime: string;
	ActionTimestamp: number;
	DomainName: string;
	Action: string;
	Message: string;
	ClientIp: string;
	ZoneId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alidns.DomainLogs
export interface DomainLogs {
	DomainLog: DomainLog[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alidns.DescribeDomainLogsResponse
export interface DescribeDomainLogsResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	DomainLogs: DomainLogs;
}

