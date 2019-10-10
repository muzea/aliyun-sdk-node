// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.RoleAuth
export interface RoleAuth {
	Title: string;
	Content: string;
	HasAuthorized: boolean;
	Link: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.RoleAuths
export interface RoleAuths {
	RoleAuth: RoleAuth[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.CheckDrdsDefaultRoleResponse
export interface CheckDrdsDefaultRoleResponse {
	RequestId: string;
	Success: boolean;
	RoleAuths: RoleAuths;
}

