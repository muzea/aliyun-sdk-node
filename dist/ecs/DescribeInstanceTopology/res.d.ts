// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.Topology
export interface Topology {
	InstanceId: string;
	HostId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.Topologys
export interface Topologys {
	Topology: Topology[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DescribeInstanceTopologyResponse
export interface DescribeInstanceTopologyResponse {
	RequestId: string;
	Topologys: Topologys;
}

