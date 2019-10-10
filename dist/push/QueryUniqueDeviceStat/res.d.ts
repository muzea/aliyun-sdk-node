// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/push.AppDeviceStat
export interface AppDeviceStat {
	Time: string;
	Count: number;
	DeviceType: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/push.AppDeviceStatsInQueryUniqueDeviceStat
export interface AppDeviceStatsInQueryUniqueDeviceStat {
	AppDeviceStat: AppDeviceStat[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/push.QueryUniqueDeviceStatResponse
export interface QueryUniqueDeviceStatResponse {
	RequestId: string;
	AppDeviceStats: AppDeviceStatsInQueryUniqueDeviceStat;
}

