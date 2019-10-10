// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/sas.QuaraFile
export interface QuaraFile {
	Name: string;
	Type: string;
	InfoType: string;
	Value: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/sas.DescribeSuspEventDetailResponse
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

