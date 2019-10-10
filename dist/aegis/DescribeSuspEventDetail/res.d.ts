// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/aegis.QuaraFile
export interface QuaraFile {
	Name: string;
	Path: string;
	Id: number;
	ModifyTime: string;
	InfoType: string;
	InternetIp: string;
	Online: boolean;
	Ip: string;
	InstanceName: string;
	EventName: string;
	FileStatus: string;
	Uuid: string;
	Value: string;
	EventType: string;
	Tag: string;
	Md5: string;
	Status: string;
	Type: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/aegis.DescribeSuspEventDetailResponse
export interface DescribeSuspEventDetailResponse {
	RequestId: string;
	LastTime: string;
	Id: number;
	InstanceName: string;
	InternetIp: string;
	IntranetIp: string;
	Uuid: string;
	EventDesc: string;
	EventTypeDesc: string;
	Level: string;
	EventStatus: string;
	SaleVersion: string;
	DataSource: string;
	Type: string;
	OperateMsg: string;
	SasId: string;
	EventName: string;
	CanBeDealOnLine: boolean;
	Details: QuaraFile[];
}

