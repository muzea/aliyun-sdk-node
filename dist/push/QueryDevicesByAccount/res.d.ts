// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/push.DeviceIdsInQueryDevicesByAccount
export interface DeviceIdsInQueryDevicesByAccount {
	DeviceId: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/push.QueryDevicesByAccountResponse
export interface QueryDevicesByAccountResponse {
	RequestId: string;
	DeviceIds: DeviceIdsInQueryDevicesByAccount;
}

