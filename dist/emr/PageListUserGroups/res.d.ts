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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.RoleDTOListInPageListUserGroups
export interface RoleDTOListInPageListUserGroups {
	RoleDTO: RoleDTO[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ItemInPageListUserGroups
export interface ItemInPageListUserGroups {
	Id: number;
	Type: string;
	Name: string;
	GmtCreate: string;
	RoleDTOList: RoleDTOListInPageListUserGroups;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ItemsInPageListUserGroups
export interface ItemsInPageListUserGroups {
	Item: ItemInPageListUserGroups[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.PageListUserGroupsResponse
export interface PageListUserGroupsResponse {
	Paging: boolean;
	RequestId: string;
	PageNumber: number;
	PageSize: number;
	TotalCount: number;
	Items: ItemsInPageListUserGroups;
}

