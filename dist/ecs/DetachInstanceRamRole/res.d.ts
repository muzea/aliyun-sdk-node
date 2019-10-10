// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.InstanceRamRoleSet
export interface InstanceRamRoleSet {
	InstanceId: string;
	RamRoleName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.InstanceRamRoleSetsInDetachInstanceRamRole
export interface InstanceRamRoleSetsInDetachInstanceRamRole {
	InstanceRamRoleSet: InstanceRamRoleSet[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DetachInstanceRamRoleResult
export interface DetachInstanceRamRoleResult {
	InstanceId: string;
	Success: boolean;
	Code: string;
	Message: string;
	InstanceRamRoleSets: InstanceRamRoleSetsInDetachInstanceRamRole;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DetachInstanceRamRoleResults
export interface DetachInstanceRamRoleResults {
	DetachInstanceRamRoleResult: DetachInstanceRamRoleResult[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DetachInstanceRamRoleResponse
export interface DetachInstanceRamRoleResponse {
	RequestId: string;
	TotalCount: number;
	FailCount: number;
	RamRoleName: string;
	DetachInstanceRamRoleResults: DetachInstanceRamRoleResults;
}

