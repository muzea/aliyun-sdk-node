// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.EipMonitorData
export interface EipMonitorData {
	EipPackets: number;
	TimeStamp: string;
	EipFlow: number;
	EipRX: number;
	EipBandwidth: number;
	EipTX: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.EipMonitorDatasInDescribeEipMonitorData
export interface EipMonitorDatasInDescribeEipMonitorData {
	EipMonitorData: EipMonitorData[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DescribeEipMonitorDataResponse
export interface DescribeEipMonitorDataResponse {
	RequestId: string;
	EipMonitorDatas: EipMonitorDatasInDescribeEipMonitorData;
}

