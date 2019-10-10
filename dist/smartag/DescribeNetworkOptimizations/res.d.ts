// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/smartag.NetworkOptimization
export interface NetworkOptimization {
	InstanceId: string;
	Name: string;
	State: string;
	CreateTime: number;
	SagCount: number;
	CcnId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/smartag.NetworkOptimizations
export interface NetworkOptimizations {
	NetworkOptimization: NetworkOptimization[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/smartag.DescribeNetworkOptimizationsResponse
export interface DescribeNetworkOptimizationsResponse {
	RequestId: string;
	TotalCount: number;
	PageNo: number;
	PageSize: number;
	NetworkOptimizations: NetworkOptimizations;
}

