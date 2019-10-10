// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/aegis.PageInfo
export interface PageInfo {
	CurrentPage: number;
	Count: number;
	TotalCount: number;
	PageSize: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/aegis.Operator
export interface Operator {
	Name: string;
	Description: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/aegis.MetaDataField
export interface MetaDataField {
	FiledName: string;
	Filed: string;
	ValueType: string;
	Sample: string;
	OperatorList: Operator[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/aegis.Entity
export interface Entity {
	Region: string;
	InWhite: number;
	LoginTypeName: string;
	Online: boolean;
	Account: number;
	CrackTimes: number;
	Uuid: string;
	LoginSourceIp: string;
	AttackType: number;
	InstanceId: string;
	Vul: number;
	LoginType: number;
	Health: number;
	Status: number;
	Ip: string;
	InstanceName: string;
	AttackTime: string;
	Suspicious: number;
	CrackSourceIp: string;
	Location: string;
	Patch: number;
	StatusName: string;
	GroupId: number;
	AttackTypeName: string;
	LoginTime: string;
	BuyVersion: string;
	UserName: string;
	Trojan: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/aegis.ListInQueryCrackEvent
export interface ListInQueryCrackEvent {
	Entity: Entity[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/aegis.ValueItem
export interface ValueItem {
	Name: string;
	Type: string;
	Value: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/aegis.CauseDetail
export interface CauseDetail {
	Key: string;
	Value: ValueItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/aegis.Data
export interface Data {
	Name: string;
	CrackSuccess: number;
	Flag: string;
	DataSource: string;
	Account: number;
	EndTime: number;
	AlarmUniqueInfo: string;
	Uuid: string;
	StartTime: number;
	Intercepted: number;
	Vul: number;
	HasTraceInfo: boolean;
	IntranetIp: string;
	Description: string;
	CanCancelFault: boolean;
	Health: number;
	Type: string;
	Solution: string;
	SuspEventCount: number;
	InternetIp: string;
	DateSourceName: string;
	Level: string;
	InstanceName: string;
	DataSourceId: number;
	Suspicious: number;
	RemoteLogin: number;
	Patch: number;
	AlarmEventDesc: string;
	EventType: string;
	AlarmEventAliasName: string;
	CanBeDealOnLine: boolean;
	Trojan: number;
	AliseEventType: string;
	SuspEventMachineNames: string[];
	SocreThreadDate: string[];
	WeaknessUuids: string[];
	WeaknessMachineNames: string[];
	SocreThread: string[];
	SuspEventUuids: string[];
	PageInfo: PageInfo;
	MetaDataFields: MetaDataField[];
	List: ListInQueryCrackEvent;
	CauseDetails: CauseDetail[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/aegis.QueryLoginEventResponse
export interface QueryLoginEventResponse {
	requestId: string;
	Code: string;
	Success: boolean;
	Message: string;
	Data: Data;
}

