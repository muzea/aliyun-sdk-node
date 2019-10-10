// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.RoleDTO
export interface RoleDTO {
	Name: string;
	ResourceType: string;
	GmtCreate: string;
	GmtModified: string;
	Id: number;
	Description: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.RoleDTOListInPageListUsers
export interface RoleDTOListInPageListUsers {
	RoleDTO: RoleDTO[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.RoleDTOListInDescribeUser
export interface RoleDTOListInDescribeUser {
	RoleDTO: RoleDTO[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.GroupDTO
export interface GroupDTO {
	Name: string;
	GmtCreate: string;
	Id: number;
	Type: string;
	RoleDTOList: RoleDTOListInDescribeUser;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.GroupDTOListInPageListUsers
export interface GroupDTOListInPageListUsers {
	GroupDTO: GroupDTO[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.AccountDTO
export interface AccountDTO {
	AccountType: string;
	AuthType: string;
	AliyunUserId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.AccountDTOListInPageListUsers
export interface AccountDTOListInPageListUsers {
	AccountDTO: AccountDTO[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ItemInPageListUsers
export interface ItemInPageListUsers {
	AliyunUserId: string;
	UserName: string;
	UserType: string;
	Status: string;
	IsSuperAdmin: string;
	Description: string;
	GmtCreate: string;
	GmtModified: string;
	RoleDTOList: RoleDTOListInPageListUsers;
	GroupDTOList: GroupDTOListInPageListUsers;
	AccountDTOList: AccountDTOListInPageListUsers;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ItemsInPageListUsers
export interface ItemsInPageListUsers {
	Item: ItemInPageListUsers[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.PageListUsersResponse
export interface PageListUsersResponse {
	Paging: boolean;
	RequestId: string;
	PageNumber: number;
	PageSize: number;
	TotalCount: number;
	Items: ItemsInPageListUsers;
}

