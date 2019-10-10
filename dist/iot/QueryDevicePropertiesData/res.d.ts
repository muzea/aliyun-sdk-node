// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.PropertyInfo
export interface PropertyInfo {
	Value: string;
	Time: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.ListInQueryDevicePropertiesData
export interface ListInQueryDevicePropertiesData {
	PropertyInfo: PropertyInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.PropertyDataInfo
export interface PropertyDataInfo {
	Identifier: string;
	List: ListInQueryDevicePropertiesData;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.PropertyDataInfos
export interface PropertyDataInfos {
	PropertyDataInfo: PropertyDataInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.QueryDevicePropertiesDataResponse
export interface QueryDevicePropertiesDataResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	ErrorMessage: string;
	NextValid: boolean;
	NextTime: number;
	PropertyDataInfos: PropertyDataInfos;
}

