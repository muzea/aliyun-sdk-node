// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.User
export interface User {
	GmtCreate: number;
	KnoxStatus: string;
	UserId: string;
	OwnerId: string;
	GmtModified: number;
	ProjectId: string;
	UserName: string;
	GroupName: string;
	KerberosStatus: string;
	LinuxStatus: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.UserListInListUsers
export interface UserListInListUsers {
	User: User[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ListUsersResponse
export interface ListUsersResponse {
	RequestId: string;
	UserList: UserListInListUsers;
}

