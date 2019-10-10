// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.SimpleDeviceInfo
export interface SimpleDeviceInfo {
	ProductName: string;
	DeviceName: string;
	IotId: string;
	ProductKey: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.DataInQueryDeviceByTags
export interface DataInQueryDeviceByTags {
	SimpleDeviceInfo: SimpleDeviceInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.QueryDeviceByTagsResponse
export interface QueryDeviceByTagsResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	ErrorMessage: string;
	Page: number;
	PageSize: number;
	PageCount: number;
	Total: number;
	Data: DataInQueryDeviceByTags;
}

