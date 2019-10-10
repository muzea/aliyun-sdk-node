// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/uis.HighPriorityIp
export interface HighPriorityIp {
	Domain: string;
	Ip: string;
	State: string;
	StaticOffAreaId: string;
	DynamicOffAreaId: string;
	BoardAreaId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/uis.HighPriorityIps
export interface HighPriorityIps {
	HighPriorityIp: HighPriorityIp[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/uis.DescribeHighPriorityIpResponse
export interface DescribeHighPriorityIpResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	HighPriorityIps: HighPriorityIps;
}

