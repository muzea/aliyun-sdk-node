// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.PropertyStatusInfo
export interface PropertyStatusInfo {
	Unit: string;
	Identifier: string;
	DataType: string;
	Time: string;
	Value: string;
	Name: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.ListInQueryDevicePropertyStatus
export interface ListInQueryDevicePropertyStatus {
	PropertyStatusInfo: PropertyStatusInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.DataInQueryDevicePropertyStatus
export interface DataInQueryDevicePropertyStatus {
	List: ListInQueryDevicePropertyStatus;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.QueryDevicePropertyStatusResponse
export interface QueryDevicePropertyStatusResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	ErrorMessage: string;
	Data: DataInQueryDevicePropertyStatus;
}

