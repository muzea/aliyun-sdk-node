// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.DeviceStatus
export interface DeviceStatus {
	DeviceId: string;
	DeviceName: string;
	Status: string;
	AsAddress: string;
	LastOnlineTime: string;
	IotId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.DeviceStatusList
export interface DeviceStatusList {
	DeviceStatus: DeviceStatus[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.BatchGetDeviceStateResponse
export interface BatchGetDeviceStateResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	ErrorMessage: string;
	DeviceStatusList: DeviceStatusList;
}

