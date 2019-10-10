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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.Users
export interface Users {
	User: User[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ListFlowProjectUserResponse
export interface ListFlowProjectUserResponse {
	RequestId: string;
	PageNumber: number;
	PageSize: number;
	Total: number;
	Users: Users;
}

