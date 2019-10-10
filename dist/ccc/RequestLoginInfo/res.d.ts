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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.RolesInRequestLoginInfo
export interface RolesInRequestLoginInfo {
	Role: Role[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.LoginInfo
export interface LoginInfo {
	UserName: string;
	DisplayName: string;
	PhoneNumber: string;
	Region: string;
	WebRtcUrl: string;
	AgentServerUrl: string;
	Extension: string;
	TenantId: string;
	Signature: string;
	SignData: string;
	Roles: RolesInRequestLoginInfo;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.RequestLoginInfoResponse
export interface RequestLoginInfoResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Message: string;
	HttpStatusCode: number;
	LoginInfo: LoginInfo;
}

