// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ram.User
export interface User {
	MobilePhone: string;
	Comments: string;
	CreateDate: string;
	AttachDate: string;
	Email: string;
	UserId: string;
	UpdateDate: string;
	UserName: string;
	JoinDate: string;
	LastLoginDate: string;
	DisplayName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ram.UsersInListUsersForGroup
export interface UsersInListUsersForGroup {
	User: User[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ram.ListUsersForGroupResponse
export interface ListUsersForGroupResponse {
	RequestId: string;
	IsTruncated: boolean;
	Marker: string;
	Users: UsersInListUsersForGroup;
}

