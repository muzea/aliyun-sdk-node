// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.Role
export interface Role {
	Id: number;
	AdminUserId: string;
	Name: string;
	CreateTime: number;
	UpdateTime: number;
	IsDefault: boolean;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.Action
export interface Action {
	Name: string;
	Code: string;
	GroupId: string;
	Description: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.ActionListInListRole
export interface ActionListInListRole {
	Action: Action[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.RoleItem
export interface RoleItem {
	Role: Role;
	ActionList: ActionListInListRole;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.RoleList
export interface RoleList {
	RoleItem: RoleItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.ListRoleResponse
export interface ListRoleResponse {
	Code: number;
	Message: string;
	RequestId: string;
	RoleList: RoleList;
}

