// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.InstanceInDescribeFleetInstances
export interface InstanceInDescribeFleetInstances {
	InstanceId: string;
	Status: string;
	RegionId: string;
	IzNo: string;
	ZoneNo: string;
	Cores: number;
	Memory: number;
	InstanceType: string;
	IsSpot: boolean;
	IoOptimized: boolean;
	NetworkType: boolean;
	OsType: boolean;
	CreationTime: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.InstancesInDescribeFleetInstances
export interface InstancesInDescribeFleetInstances {
	Instance: InstanceInDescribeFleetInstances[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DescribeFleetInstancesResponse
export interface DescribeFleetInstancesResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	Instances: InstancesInDescribeFleetInstances;
}

