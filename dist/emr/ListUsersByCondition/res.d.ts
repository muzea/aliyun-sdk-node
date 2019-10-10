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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.RoleDTOListInListUsersByCondition
export interface RoleDTOListInListUsersByCondition {
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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.GroupDTOListInListUsersByCondition
export interface GroupDTOListInListUsersByCondition {
	GroupDTO: GroupDTO[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.AccountDTO
export interface AccountDTO {
	AccountType: string;
	AuthType: string;
	AliyunUserId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.AccountDTOListInListUsersByCondition
export interface AccountDTOListInListUsersByCondition {
	AccountDTO: AccountDTO[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.UserDTO
export interface UserDTO {
	AliyunUserId: string;
	UserName: string;
	UserType: string;
	Status: string;
	IsSuperAdmin: string;
	Description: string;
	GmtCreate: string;
	GmtModified: string;
	RoleDTOList: RoleDTOListInListUsersByCondition;
	GroupDTOList: GroupDTOListInListUsersByCondition;
	AccountDTOList: AccountDTOListInListUsersByCondition;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.DataInListUsersByCondition
export interface DataInListUsersByCondition {
	userDTO: UserDTO[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ListUsersByConditionResponse
export interface ListUsersByConditionResponse {
	Paging: boolean;
	RequestId: string;
	Data: DataInListUsersByCondition;
}

