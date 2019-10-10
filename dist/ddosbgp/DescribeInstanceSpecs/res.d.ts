// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ddosbgp.PackConfig
export interface PackConfig {
	PackAdvThre: number;
	IpAdvanceThre: number;
	IpBasicThre: number;
	PackBasicThre: number;
	IpSpec: number;
	BindIpCount: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ddosbgp.InstanceSpec
export interface InstanceSpec {
	Region: string;
	AvailableDeleteBlackholeCount: string;
	InstanceId: string;
	PackConfig: PackConfig;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ddosbgp.DescribeInstanceSpecsResponse
export interface DescribeInstanceSpecsResponse {
	RequestId: string;
	InstanceSpecs: InstanceSpec[];
}

