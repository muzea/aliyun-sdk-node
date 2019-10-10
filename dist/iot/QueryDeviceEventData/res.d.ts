// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.EventInfo
export interface EventInfo {
	Time: string;
	Identifier: string;
	Name: string;
	EventType: string;
	OutputData: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.ListInQueryDeviceEventData
export interface ListInQueryDeviceEventData {
	EventInfo: EventInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.DataInQueryDeviceEventData
export interface DataInQueryDeviceEventData {
	NextTime: number;
	NextValid: boolean;
	List: ListInQueryDeviceEventData;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.QueryDeviceEventDataResponse
export interface QueryDeviceEventDataResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	ErrorMessage: string;
	Data: DataInQueryDeviceEventData;
}

