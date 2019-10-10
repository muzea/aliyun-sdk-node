// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ens.InstanceSpec
export interface InstanceSpec {
	InstanceType: string;
	Core: string;
	Memory: string;
	DisplayName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ens.InstanceSpecs
export interface InstanceSpecs {
	InstanceSpec: InstanceSpec[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ens.DescribeInstanceSpecResponse
export interface DescribeInstanceSpecResponse {
	RequestId: string;
	Code: number;
	DataDiskMinSize: number;
	DataDiskMaxSize: number;
	SystemDiskMaxSize: number;
	BandwidthLimit: number;
	InstanceSpecs: InstanceSpecs;
}

