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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.DataInListUserGroups
export interface DataInListUserGroups {
	groupDTO: GroupDTO[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ListUserGroupsResponse
export interface ListUserGroupsResponse {
	Paging: boolean;
	RequestId: string;
	Data: DataInListUserGroups;
}

