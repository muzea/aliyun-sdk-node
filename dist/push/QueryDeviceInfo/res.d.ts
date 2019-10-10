// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/push.DeviceInfo
export interface DeviceInfo {
	DeviceId: string;
	DeviceType: string;
	Account: string;
	DeviceToken: string;
	Tags: string;
	Alias: string;
	LastOnlineTime: string;
	Online: boolean;
	PhoneNumber: string;
	PushEnabled: boolean;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/push.QueryDeviceInfoResponse
export interface QueryDeviceInfoResponse {
	RequestId: string;
	DeviceInfo: DeviceInfo;
}

