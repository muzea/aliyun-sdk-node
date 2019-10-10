// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ram.Role
export interface Role {
	RoleId: string;
	CreateDate: string;
	AttachDate: string;
	Arn: string;
	UpdateDate: string;
	Description: string;
	RoleName: string;
	AssumeRolePolicyDocument: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ram.UpdateRoleResponse
export interface UpdateRoleResponse {
	RequestId: string;
	Role: Role;
}

