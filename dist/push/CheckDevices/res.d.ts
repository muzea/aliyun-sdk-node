// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/push.DeviceCheckInfo
export interface DeviceCheckInfo {
	DeviceId: string;
	Available: boolean;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/push.DeviceCheckInfos
export interface DeviceCheckInfos {
	DeviceCheckInfo: DeviceCheckInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/push.CheckDevicesResponse
export interface CheckDevicesResponse {
	RequestId: string;
	DeviceCheckInfos: DeviceCheckInfos;
}

