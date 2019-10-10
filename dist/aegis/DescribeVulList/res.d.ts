// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/aegis.Necessity
export interface Necessity {
	Cvss_factor: string;
	Gmt_create: string;
	Status: string;
	Enviroment_factor: string;
	Assets_factor: string;
	Is_calc: string;
	Total_score: string;
	Time_factor: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/aegis.RpmEntityListItem
export interface RpmEntityListItem {
	FullVersion: string;
	MatchDetail: string;
	Name: string;
	Path: string;
	UpdateCmd: string;
	Version: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/aegis.ExtendContentJson
export interface ExtendContentJson {
	Os: string;
	OsRelease: string;
	Status: number;
	LastTs: number;
	AliasName: string;
	Tag: string;
	PrimaryId: number;
	Level: string;
	AbsolutePath: string;
	Target: string;
	Proof: string;
	Reason: string;
	cveList: string[];
	Necessity: Necessity;
	RpmEntityList: RpmEntityListItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/aegis.VulRecord
export interface VulRecord {
	PrimaryId: number;
	Uuid: string;
	Name: string;
	Tag: string;
	AliasName: string;
	RecordId: number;
	Type: string;
	Level: string;
	Product: string;
	FirstTs: number;
	LastTs: number;
	RepairTs: number;
	Status: number;
	Related: string;
	ResultCode: string;
	ResultMessage: string;
	ModifyTs: number;
	Necessity: string;
	GroupId: number;
	InstanceId: string;
	InstanceName: string;
	InternetIp: string;
	IntranetIp: string;
	Ip: string;
	OsVersion: string;
	NeedReboot: string;
	ExtendContentJson: ExtendContentJson;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/aegis.DescribeVulListResponse
export interface DescribeVulListResponse {
	RequestId: string;
	PageSize: number;
	CurrentPage: number;
	TotalCount: number;
	VulRecords: VulRecord[];
}

