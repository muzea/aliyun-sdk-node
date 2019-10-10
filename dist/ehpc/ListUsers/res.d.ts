// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.UserInfo
export interface UserInfo {
	Name: string;
	Group: string;
	AddTime: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.Users
export interface Users {
	UserInfo: UserInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.ListUsersResponse
export interface ListUsersResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	Users: Users;
}

