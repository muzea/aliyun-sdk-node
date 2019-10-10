// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.PropertyInfoInQueryDevicePropertyData
export interface PropertyInfoInQueryDevicePropertyData {
	Time: string;
	Value: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.ListInQueryDevicePropertyData
export interface ListInQueryDevicePropertyData {
	PropertyInfo: PropertyInfoInQueryDevicePropertyData[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.DataInQueryDevicePropertyData
export interface DataInQueryDevicePropertyData {
	NextValid: boolean;
	NextTime: number;
	List: ListInQueryDevicePropertyData;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.QueryDevicePropertyDataResponse
export interface QueryDevicePropertyDataResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	ErrorMessage: string;
	Data: DataInQueryDevicePropertyData;
}

