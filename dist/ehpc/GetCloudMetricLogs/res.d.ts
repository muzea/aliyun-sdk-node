// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.MetricLog
export interface MetricLog {
	Time: number;
	InstanceId: string;
	Hostname: string;
	NetworkInterface: string;
	DiskDevice: string;
	MetricData: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.MetricLogs
export interface MetricLogs {
	MetricLog: MetricLog[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.GetCloudMetricLogsResponse
export interface GetCloudMetricLogsResponse {
	RequestId: string;
	MetricLogs: MetricLogs;
}

