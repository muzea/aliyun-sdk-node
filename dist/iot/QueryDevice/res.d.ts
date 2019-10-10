// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.DeviceInfo
export interface DeviceInfo {
	DeviceName: string;
	GmtCreate: string;
	Nickname: string;
	IotId: string;
	DeviceSecret: string;
	DeviceId: string;
	ProductKey: string;
	DeviceStatus: string;
	GmtModified: string;
	DeviceType: string;
	UtcModified: string;
	UtcCreate: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.DataInQueryDevice
export interface DataInQueryDevice {
	DeviceInfo: DeviceInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.QueryDeviceResponse
export interface QueryDeviceResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	ErrorMessage: string;
	Total: number;
	PageSize: number;
	PageCount: number;
	Page: number;
	Data: DataInQueryDevice;
}

