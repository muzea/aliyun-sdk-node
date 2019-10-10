// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.Privilege
export interface Privilege {
	PrivilegeName: string;
	PrivilegeDescription: string;
	PrivilegeId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.PrivilegesInListUsersOfSkillGroup
export interface PrivilegesInListUsersOfSkillGroup {
	Privilege: Privilege[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.Role
export interface Role {
	RoleId: string;
	InstanceId: string;
	UserCount: number;
	RoleName: string;
	RoleDescription: string;
	Privileges: PrivilegesInListUsersOfSkillGroup;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.RolesInListRoles
export interface RolesInListRoles {
	Role: Role[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.ListRolesResponse
export interface ListRolesResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Message: string;
	HttpStatusCode: number;
	Roles: RolesInListRoles;
}

