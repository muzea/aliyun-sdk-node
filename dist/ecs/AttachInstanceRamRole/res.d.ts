// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.AttachInstanceRamRoleResult
export interface AttachInstanceRamRoleResult {
	InstanceId: string;
	Success: boolean;
	Code: string;
	Message: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.AttachInstanceRamRoleResults
export interface AttachInstanceRamRoleResults {
	AttachInstanceRamRoleResult: AttachInstanceRamRoleResult[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.AttachInstanceRamRoleResponse
export interface AttachInstanceRamRoleResponse {
	RequestId: string;
	TotalCount: number;
	FailCount: number;
	RamRoleName: string;
	AttachInstanceRamRoleResults: AttachInstanceRamRoleResults;
}

