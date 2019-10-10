// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.InstanceRamRoleSet
export interface InstanceRamRoleSet {
	InstanceId: string;
	RamRoleName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.InstanceRamRoleSetsInDescribeInstanceRamRole
export interface InstanceRamRoleSetsInDescribeInstanceRamRole {
	InstanceRamRoleSet: InstanceRamRoleSet[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DescribeInstanceRamRoleResponse
export interface DescribeInstanceRamRoleResponse {
	RequestId: string;
	RegionId: string;
	TotalCount: number;
	InstanceRamRoleSets: InstanceRamRoleSetsInDescribeInstanceRamRole;
}

