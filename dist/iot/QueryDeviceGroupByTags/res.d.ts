// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.DeviceGroup
export interface DeviceGroup {
	GroupId: string;
	GroupName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.DataInQueryDeviceGroupByTags
export interface DataInQueryDeviceGroupByTags {
	DeviceGroup: DeviceGroup[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.QueryDeviceGroupByTagsResponse
export interface QueryDeviceGroupByTagsResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	ErrorMessage: string;
	Page: number;
	PageSize: number;
	PageCount: number;
	Total: number;
	Data: DataInQueryDeviceGroupByTags;
}

