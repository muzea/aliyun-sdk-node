// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ens.InstanceMonitorData
export interface InstanceMonitorData {
	InstanceId: string;
	Memory: string;
	CPU: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ens.MonitorDataInDescribeInstanceMonitorData
export interface MonitorDataInDescribeInstanceMonitorData {
	InstanceMonitorData: InstanceMonitorData[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ens.DescribeInstanceMonitorDataResponse
export interface DescribeInstanceMonitorDataResponse {
	RequestId: string;
	Code: number;
	MonitorData: MonitorDataInDescribeInstanceMonitorData;
}

