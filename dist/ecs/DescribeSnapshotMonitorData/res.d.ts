// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DataPoint
export interface DataPoint {
	TimeStamp: string;
	Size: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.MonitorDataInDescribeSnapshotMonitorData
export interface MonitorDataInDescribeSnapshotMonitorData {
	DataPoint: DataPoint[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DescribeSnapshotMonitorDataResponse
export interface DescribeSnapshotMonitorDataResponse {
	RequestId: string;
	MonitorData: MonitorDataInDescribeSnapshotMonitorData;
}

