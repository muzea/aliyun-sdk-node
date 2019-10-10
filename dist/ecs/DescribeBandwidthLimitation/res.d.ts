// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.Bandwidth
export interface Bandwidth {
	InternetChargeType: string;
	Min: number;
	Max: number;
	Unit: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.Bandwidths
export interface Bandwidths {
	Bandwidth: Bandwidth[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DescribeBandwidthLimitationResponse
export interface DescribeBandwidthLimitationResponse {
	RequestId: string;
	Bandwidths: Bandwidths;
}

