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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.DataInListRoles
export interface DataInListRoles {
	roleDTO: RoleDTO[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ListRolesResponse
export interface ListRolesResponse {
	Paging: boolean;
	RequestId: string;
	Data: DataInListRoles;
}

