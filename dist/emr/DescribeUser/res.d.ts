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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.GroupDTOListInDescribeUser
export interface GroupDTOListInDescribeUser {
	GroupDTO: GroupDTO[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.AccountDTO
export interface AccountDTO {
	AccountType: string;
	AuthType: string;
	AliyunUserId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.AccountDTOListInDescribeUser
export interface AccountDTOListInDescribeUser {
	AccountDTO: AccountDTO[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.DescribeUserResponse
export interface DescribeUserResponse {
	Paging: boolean;
	RequestId: string;
	AliyunUserId: string;
	UserName: string;
	UserType: string;
	Status: string;
	IsSuperAdmin: string;
	Description: string;
	GmtCreate: string;
	GmtModified: string;
	RoleDTOList: RoleDTOListInDescribeUser;
	GroupDTOList: GroupDTOListInDescribeUser;
	AccountDTOList: AccountDTOListInDescribeUser;
}

