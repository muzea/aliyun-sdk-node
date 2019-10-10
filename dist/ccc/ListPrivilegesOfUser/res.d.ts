// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.Privilege
export interface Privilege {
	PrivilegeName: string;
	PrivilegeDescription: string;
	PrivilegeId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.PrivilegesInListPrivilegesOfUser
export interface PrivilegesInListPrivilegesOfUser {
	Privilege: Privilege[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.ListPrivilegesOfUserResponse
export interface ListPrivilegesOfUserResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Message: string;
	HttpStatusCode: number;
	Privileges: PrivilegesInListPrivilegesOfUser;
}

