// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.OperationLock
export interface OperationLock {
	LockReason: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.OperationLocksInDescribeReservedInstances
export interface OperationLocksInDescribeReservedInstances {
	OperationLock: OperationLock[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.ReservedInstance
export interface ReservedInstance {
	ReservedInstanceId: string;
	RegionId: string;
	ZoneId: string;
	ReservedInstanceName: string;
	Description: string;
	InstanceType: string;
	Scope: string;
	OfferingType: string;
	Platform: string;
	InstanceAmount: number;
	Status: string;
	CreationTime: string;
	ExpiredTime: string;
	StartTime: string;
	ResourceGroupId: string;
	OperationLocks: OperationLocksInDescribeReservedInstances;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.ReservedInstances
export interface ReservedInstances {
	ReservedInstance: ReservedInstance[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DescribeReservedInstancesResponse
export interface DescribeReservedInstancesResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	ReservedInstances: ReservedInstances;
}

