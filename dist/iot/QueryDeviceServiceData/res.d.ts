// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.ServiceInfo
export interface ServiceInfo {
	Time: string;
	Identifier: string;
	Name: string;
	InputData: string;
	OutputData: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.ListInQueryDeviceServiceData
export interface ListInQueryDeviceServiceData {
	ServiceInfo: ServiceInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.DataInQueryDeviceServiceData
export interface DataInQueryDeviceServiceData {
	NextTime: number;
	NextValid: boolean;
	List: ListInQueryDeviceServiceData;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.QueryDeviceServiceDataResponse
export interface QueryDeviceServiceDataResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	ErrorMessage: string;
	Data: DataInQueryDeviceServiceData;
}

