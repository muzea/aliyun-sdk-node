// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DiskMonitorData
export interface DiskMonitorData {
	DiskId: string;
	IOPSRead: number;
	IOPSWrite: number;
	IOPSTotal: number;
	BPSRead: number;
	BPSWrite: number;
	BPSTotal: number;
	LatencyRead: number;
	LatencyWrite: number;
	TimeStamp: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.MonitorDataInDescribeDiskMonitorData
export interface MonitorDataInDescribeDiskMonitorData {
	DiskMonitorData: DiskMonitorData[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DescribeDiskMonitorDataResponse
export interface DescribeDiskMonitorDataResponse {
	RequestId: string;
	TotalCount: number;
	MonitorData: MonitorDataInDescribeDiskMonitorData;
}

