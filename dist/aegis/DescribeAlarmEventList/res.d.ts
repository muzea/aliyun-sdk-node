// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/aegis.PageInfo
export interface PageInfo {
	CurrentPage: number;
	Count: number;
	TotalCount: number;
	PageSize: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/aegis.SuspEventsItem
export interface SuspEventsItem {
	Solution: string;
	SaleVersion: string;
	InternetIp: string;
	Level: string;
	InstanceName: string;
	DataSource: string;
	AlarmEventName: string;
	EndTime: number;
	AlarmUniqueInfo: string;
	Dealed: boolean;
	AlarmEventType: string;
	StartTime: number;
	Uuid: string;
	GmtModified: number;
	HasTraceInfo: boolean;
	CanBeDealOnLine: boolean;
	SuspiciousEventCount: number;
	IntranetIp: string;
	Description: string;
	CanCancelFault: boolean;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/aegis.DescribeAlarmEventListResponse
export interface DescribeAlarmEventListResponse {
	RequestId: string;
	PageInfo: PageInfo;
	SuspEvents: SuspEventsItem[];
}

