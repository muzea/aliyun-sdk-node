// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.Role
export interface Role {
	Id: number;
	Name: string;
	DisplayName: string;
	Level: number;
	CreateTime: string;
	UpdateTime: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.DataInListRoles
export interface DataInListRoles {
	Role: Role[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.ListRolesResponse
export interface ListRolesResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Message: string;
	Data: DataInListRoles;
}

