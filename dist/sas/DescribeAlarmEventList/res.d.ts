// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/sas.PageInfo
export interface PageInfo {
	Count: number;
	PageSize: number;
	TotalCount: number;
	CurrentPage: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/sas.SuspEventsItem
export interface SuspEventsItem {
	AlarmUniqueInfo: string;
	Solution: string;
	Level: string;
	CanBeDealOnLine: boolean;
	Description: string;
	StartTime: number;
	EndTime: number;
	AlarmEventType: string;
	SuspiciousEventCount: number;
	Uuid: string;
	InstanceName: string;
	InternetIp: string;
	IntranetIp: string;
	AlarmEventName: string;
	SaleVersion: string;
	DataSource: string;
	CanCancelFault: boolean;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/sas.DescribeAlarmEventListResponse
export interface DescribeAlarmEventListResponse {
	RequestId: string;
	PageInfo: PageInfo;
	SuspEvents: SuspEventsItem[];
}

