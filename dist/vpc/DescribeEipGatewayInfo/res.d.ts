// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.EipInfo
export interface EipInfo {
	Ip: string;
	IpGw: string;
	IpMask: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.EipInfos
export interface EipInfos {
	EipInfo: EipInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.DescribeEipGatewayInfoResponse
export interface DescribeEipGatewayInfoResponse {
	RequestId: string;
	Code: string;
	Message: string;
	EipInfos: EipInfos;
}

