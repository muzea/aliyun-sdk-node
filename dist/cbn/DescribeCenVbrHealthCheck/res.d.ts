// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cbn.VbrHealthCheck
export interface VbrHealthCheck {
	CenId: string;
	VbrInstanceId: string;
	LinkStatus: string;
	PacketLoss: number;
	HealthCheckSourceIp: string;
	HealthCheckTargetIp: string;
	Delay: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cbn.VbrHealthChecks
export interface VbrHealthChecks {
	VbrHealthCheck: VbrHealthCheck[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cbn.DescribeCenVbrHealthCheckResponse
export interface DescribeCenVbrHealthCheckResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	VbrHealthChecks: VbrHealthChecks;
}

