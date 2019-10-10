// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.ApplyDeviceInfo
export interface ApplyDeviceInfo {
	DeviceId: string;
	DeviceName: string;
	DeviceSecret: string;
	IotId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.ApplyDeviceList
export interface ApplyDeviceList {
	ApplyDeviceInfo: ApplyDeviceInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.QueryPageByApplyIdResponse
export interface QueryPageByApplyIdResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	ErrorMessage: string;
	PageSize: number;
	Page: number;
	PageCount: number;
	Total: number;
	ApplyDeviceList: ApplyDeviceList;
}

