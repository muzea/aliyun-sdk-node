// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.EipMonitorData
export interface EipMonitorData {
	EipRX: number;
	EipTX: number;
	EipFlow: number;
	EipBandwidth: number;
	EipPackets: number;
	TimeStamp: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.EipMonitorDatas
export interface EipMonitorDatas {
	EipMonitorData: EipMonitorData[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.DescribeEipMonitorDataResponse
export interface DescribeEipMonitorDataResponse {
	RequestId: string;
	EipMonitorDatas: EipMonitorDatas;
}

