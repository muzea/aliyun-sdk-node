// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.InstanceTypeFamily
export interface InstanceTypeFamily {
	InstanceTypeFamilyId: string;
	Generation: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.InstanceTypeFamiliesInDescribeInstanceTypeFamilies
export interface InstanceTypeFamiliesInDescribeInstanceTypeFamilies {
	InstanceTypeFamily: InstanceTypeFamily[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DescribeInstanceTypeFamiliesResponse
export interface DescribeInstanceTypeFamiliesResponse {
	RequestId: string;
	InstanceTypeFamilies: InstanceTypeFamiliesInDescribeInstanceTypeFamilies;
}

