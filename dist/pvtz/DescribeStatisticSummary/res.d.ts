// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/pvtz.ZoneRequestTop
export interface ZoneRequestTop {
	Time: string;
	RequestCount: number;
	Timestamp: number;
	ZoneName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/pvtz.ZoneRequestTops
export interface ZoneRequestTops {
	ZoneRequestTop: ZoneRequestTop[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/pvtz.VpcRequestTop
export interface VpcRequestTop {
	RegionId: string;
	VpcId: string;
	TunnelId: string;
	RequestCount: number;
	RegionName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/pvtz.VpcRequestTops
export interface VpcRequestTops {
	VpcRequestTop: VpcRequestTop[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/pvtz.DescribeStatisticSummaryResponse
export interface DescribeStatisticSummaryResponse {
	RequestId: string;
	TotalCount: number;
	ZoneRequestTops: ZoneRequestTops;
	VpcRequestTops: VpcRequestTops;
}

