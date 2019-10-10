// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/sas.WarningSummary
export interface WarningSummary {
	Name: string;
	SaleVersion: string;
	Desc: string;
	DataSource: string;
	AlarmUniqueInfo: string;
	RiskId: number;
	AlarmEventType: string;
	Uuid: string;
	LastTime: string;
	OccurrenceTime: string;
	IntranetIp: string;
	LastFoundTime: string;
	CheckCount: number;
	OperateMsg: string;
	LowWarningCount: number;
	InternetIp: string;
	EventStatus: number;
	RiskName: string;
	Level: string;
	InstanceName: string;
	Id: number;
	AlarmEventName: string;
	WarningMachineCount: number;
	HighWarningCount: number;
	SubTypeAlias: string;
	TypeAlias: string;
	EventSubType: string;
	CanBeDealOnLine: boolean;
	MediumWarningCount: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/sas.DescribeCheckWarningSummaryResponse
export interface DescribeCheckWarningSummaryResponse {
	RequestId: string;
	Count: number;
	PageSize: number;
	TotalCount: number;
	CurrentPage: number;
	WarningSummarys: WarningSummary[];
}

