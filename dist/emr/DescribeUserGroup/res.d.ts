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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.RoleDTOListInDescribeUserGroup
export interface RoleDTOListInDescribeUserGroup {
	RoleDTO: RoleDTO[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.DescribeUserGroupResponse
export interface DescribeUserGroupResponse {
	Paging: boolean;
	RequestId: string;
	Id: number;
	Type: string;
	Name: string;
	GmtCreate: string;
	RoleDTOList: RoleDTOListInDescribeUserGroup;
}

