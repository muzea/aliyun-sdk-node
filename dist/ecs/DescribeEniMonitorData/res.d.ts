// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.EniMonitorData
export interface EniMonitorData {
	EniId: string;
	TimeStamp: string;
	PacketTx: string;
	PacketRx: string;
	IntranetTx: string;
	IntranetRx: string;
	DropPacketTx: string;
	DropPacketRx: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.MonitorDataInDescribeEniMonitorData
export interface MonitorDataInDescribeEniMonitorData {
	EniMonitorData: EniMonitorData[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DescribeEniMonitorDataResponse
export interface DescribeEniMonitorDataResponse {
	RequestId: string;
	TotalCount: number;
	MonitorData: MonitorDataInDescribeEniMonitorData;
}

