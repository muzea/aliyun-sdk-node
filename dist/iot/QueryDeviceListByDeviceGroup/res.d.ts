// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.SimpleDeviceInfo
export interface SimpleDeviceInfo {
	ProductName: string;
	DeviceName: string;
	IotId: string;
	ProductKey: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.DataInQueryDeviceListByDeviceGroup
export interface DataInQueryDeviceListByDeviceGroup {
	SimpleDeviceInfo: SimpleDeviceInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.QueryDeviceListByDeviceGroupResponse
export interface QueryDeviceListByDeviceGroupResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	ErrorMessage: string;
	Page: number;
	PageSize: number;
	PageCount: number;
	Total: number;
	Data: DataInQueryDeviceListByDeviceGroup;
}

