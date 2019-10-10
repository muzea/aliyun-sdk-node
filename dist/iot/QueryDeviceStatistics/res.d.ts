// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.DataInQueryDeviceStatistics
export interface DataInQueryDeviceStatistics {
	deviceCount: number;
	onlineCount: number;
	activeCount: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.QueryDeviceStatisticsResponse
export interface QueryDeviceStatisticsResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	ErrorMessage: string;
	Data: DataInQueryDeviceStatistics;
}

