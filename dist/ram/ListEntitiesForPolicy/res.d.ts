// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ram.Group
export interface Group {
	Comments: string;
	AttachDate: string;
	CreateDate: string;
	UpdateDate: string;
	GroupName: string;
	JoinDate: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ram.GroupsInListEntitiesForPolicy
export interface GroupsInListEntitiesForPolicy {
	Group: Group[];
}

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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ram.UsersInListEntitiesForPolicy
export interface UsersInListEntitiesForPolicy {
	User: User[];
}

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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ram.RolesInListEntitiesForPolicy
export interface RolesInListEntitiesForPolicy {
	Role: Role[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ram.ListEntitiesForPolicyResponse
export interface ListEntitiesForPolicyResponse {
	RequestId: string;
	Groups: GroupsInListEntitiesForPolicy;
	Users: UsersInListEntitiesForPolicy;
	Roles: RolesInListEntitiesForPolicy;
}

