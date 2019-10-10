// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.InstanceMonitorData
export interface InstanceMonitorData {
	InstanceId: string;
	CPU: number;
	IntranetRX: number;
	IntranetTX: number;
	IntranetBandwidth: number;
	InternetRX: number;
	InternetTX: number;
	InternetBandwidth: number;
	IOPSRead: number;
	IOPSWrite: number;
	BPSRead: number;
	BPSWrite: number;
	CPUCreditUsage: number;
	CPUCreditBalance: number;
	CPUAdvanceCreditBalance: number;
	CPUNotpaidSurplusCreditUsage: number;
	TimeStamp: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.MonitorDataInDescribeInstanceMonitorData
export interface MonitorDataInDescribeInstanceMonitorData {
	InstanceMonitorData: InstanceMonitorData[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DescribeInstanceMonitorDataResponse
export interface DescribeInstanceMonitorDataResponse {
	RequestId: string;
	MonitorData: MonitorDataInDescribeInstanceMonitorData;
}

