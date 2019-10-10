// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.FieldNameList
export interface FieldNameList {
	FieldNameList: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.InvalidDeviceNameList
export interface InvalidDeviceNameList {
	InvalidDeviceName: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.ResultList
export interface ResultList {
	ResultList: map[string]interface {}[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.RequestParamsItem
export interface RequestParamsItem {
	Name: string;
	Type: string;
	Desc: string;
	Example: string;
	Required: boolean;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.RequestParams
export interface RequestParams {
	RequestParamsItem: RequestParamsItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.ResponseParamsItem
export interface ResponseParamsItem {
	Name: string;
	Type: string;
	Desc: string;
	Example: string;
	Required: boolean;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.ResponseParams
export interface ResponseParams {
	ResponseParamsItem: ResponseParamsItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.SqlTemplateDTO
export interface SqlTemplateDTO {
	OriginSql: string;
	TemplateSql: string;
	RequestParams: RequestParams;
	ResponseParams: ResponseParams;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.DesiredPropertyInfo
export interface DesiredPropertyInfo {
	Unit: string;
	Identifier: string;
	DataType: string;
	Time: string;
	Value: string;
	Name: string;
	Version: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.ListInQueryDeviceDesiredProperty
export interface ListInQueryDeviceDesiredProperty {
	DesiredPropertyInfo: DesiredPropertyInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.Data
export interface Data {
	DataFormat: number;
	RequestProtocol: string;
	UtcCreate: string;
	DeviceActive: number;
	RequestMethod: string;
	Nickname: string;
	CategoryName: string;
	PageNo: number;
	DevEui: string;
	GroupId: string;
	FileId: string;
	LastUpdateTime: number;
	Versions: string;
	AliyunCommodityCode: string;
	UtcCreatedOn: string;
	ApplyId: number;
	GmtCreate: number;
	MessageId: string;
	DeviceName: string;
	Size: string;
	Id2: boolean;
	Owner: boolean;
	NodeType: number;
	ApiSrn: string;
	Name: string;
	ProductName: string;
	GroupName: string;
	DownloadUrl: string;
	CategoryKey: string;
	CreateTime: number;
	PageSize: number;
	DateFormat: string;
	Description: string;
	ApiPath: string;
	DeviceOnline: number;
	Status: number;
	ProductSecret: string;
	DeviceSecret: string;
	Result: string;
	ProductKey: string;
	DisplayName: string;
	JoinEui: string;
	IotId: string;
	GroupDesc: string;
	DeviceCount: number;
	ProtocolType: string;
	ProductStatus: string;
	NetType: number;
	FieldNameList: FieldNameList;
	InvalidDeviceNameList: InvalidDeviceNameList;
	ResultList: ResultList;
	SqlTemplateDTO: SqlTemplateDTO;
	List: ListInQueryDeviceDesiredProperty;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.CreateDeviceGroupResponse
export interface CreateDeviceGroupResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	ErrorMessage: string;
	Data: Data;
}

