// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ddoscoo.InstanceSpec
export interface InstanceSpec {
	InstanceId: string;
	BaseBandwidth: number;
	ElasticBandwidth: number;
	PortLimit: number;
	DomainLimit: number;
	BandwidthMbps: number;
	DefenseCount: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ddoscoo.DescribeInstanceSpecsResponse
export interface DescribeInstanceSpecsResponse {
	RequestId: string;
	InstanceSpecs: InstanceSpec[];
}

